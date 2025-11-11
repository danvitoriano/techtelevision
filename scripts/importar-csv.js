/**
 * Script para importar notícias a partir de arquivo CSV
 * 
 * SETUP:
 * 1. npm install csv-parser (na pasta scripts)
 * 2. Edite noticias-exemplo.csv com suas notícias
 * 3. Obtenha API Token no Strapi: Settings → API Tokens → Create
 * 4. Execute: node scripts/importar-csv.js
 */

const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

const STRAPI_URL = 'https://splendid-fish-5d9df6f8db.strapiapp.com';
const API_TOKEN = 'b8819f9f21af4cda16001c26cb7b262dc8f8319d2a1f01312f35b31dc2ae116a3cffb12bb9a8b2f146fc011a2caa50cf85cac5bacbd64caa6e3d5062701e305cf6fe4b74ce6fbbee1ddb87a7e4212138ecf1d2995791a44476b1047dc9b028803807d046c9c23d17ec733a2432c6c3d006f607eff3ddbb8dd380fd3bd4dbfc07';
const CSV_FILE = process.argv[2] || path.join(__dirname, 'noticias_tech_semana.csv');

async function importarNoticiaCSV(noticia) {
  try {
    const response = await fetch(`${STRAPI_URL}/api/noticias`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          titulo: noticia.titulo,
          slug: noticia.slug,
          resumo: noticia.resumo,
          conteudo: noticia.conteudo,
          autor: noticia.autor,
          destaque: noticia.destaque === 'true',
          categoria: parseInt(noticia.categoria_id),
        }
      }),
    });

    if (response.ok) {
      return { success: true, titulo: noticia.titulo };
    } else {
      const error = await response.text();
      return { success: false, titulo: noticia.titulo, error };
    }
  } catch (error) {
    return { success: false, titulo: noticia.titulo, error: error.message };
  }
}

async function importarCSV() {
  console.log('🚀 Iniciando importação de notícias do CSV...\n');
  
  const noticias = [];
  
  // Ler arquivo CSV
  fs.createReadStream(CSV_FILE)
    .pipe(csv())
    .on('data', (row) => {
      noticias.push(row);
    })
    .on('end', async () => {
      console.log(`📋 Encontradas ${noticias.length} notícias no CSV\n`);
      
      let sucessos = 0;
      let erros = 0;

      for (const noticia of noticias) {
        const resultado = await importarNoticiaCSV(noticia);
        
        if (resultado.success) {
          console.log(`✅ Importada: ${resultado.titulo}`);
          sucessos++;
        } else {
          console.error(`❌ Erro: ${resultado.titulo} - ${resultado.error}`);
          erros++;
        }
      }

      console.log(`\n📊 Resultado:`);
      console.log(`   ✅ Sucesso: ${sucessos}`);
      console.log(`   ❌ Erros: ${erros}`);
      console.log(`   📝 Total: ${noticias.length}`);
    });
}

importarCSV();

