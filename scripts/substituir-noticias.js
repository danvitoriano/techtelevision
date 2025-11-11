/**
 * Script para deletar notícias antigas e importar versões expandidas
 */

const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

const STRAPI_URL = 'https://splendid-fish-5d9df6f8db.strapiapp.com';
const API_TOKEN = 'SEU_TOKEN_AQUI'; // Configure com seu token do Strapi
const CSV_FILE = path.join(__dirname, 'noticias_tech_semana_expandido.csv');

async function deletarPorSlug(slug) {
  try {
    // Buscar notícia pelo slug
    const buscarResponse = await fetch(
      `${STRAPI_URL}/api/noticias?filters[slug][$eq]=${slug}`,
      {
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`,
        },
      }
    );

    const resultado = await buscarResponse.json();
    
    if (resultado.data && resultado.data.length > 0) {
      const documentId = resultado.data[0].documentId;
      
      // Deletar notícia
      const deleteResponse = await fetch(
        `${STRAPI_URL}/api/noticias/${documentId}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (deleteResponse.ok) {
        return { success: true, slug };
      }
    }
    
    return { success: false, slug, error: 'Não encontrada' };
  } catch (error) {
    return { success: false, slug, error: error.message };
  }
}

async function importarNoticia(noticia) {
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

async function substituirNoticias() {
  console.log('🚀 Substituindo notícias antigas por versões expandidas...\n');
  
  const noticias = [];
  
  // Ler CSV
  fs.createReadStream(CSV_FILE)
    .pipe(csv())
    .on('data', (row) => noticias.push(row))
    .on('end', async () => {
      console.log(`📋 Encontradas ${noticias.length} notícias no CSV\n`);
      console.log('🗑️  Fase 1: Deletando versões antigas...\n');
      
      let deletadas = 0;
      for (const noticia of noticias) {
        const resultado = await deletarPorSlug(noticia.slug);
        if (resultado.success) {
          console.log(`   🗑️  Deletada: ${noticia.slug}`);
          deletadas++;
        }
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      console.log(`\n✅ ${deletadas} notícias deletadas\n`);
      console.log('📝 Fase 2: Importando versões expandidas...\n');
      
      let sucessos = 0;
      let erros = 0;

      for (const noticia of noticias) {
        const resultado = await importarNoticia(noticia);
        
        if (resultado.success) {
          console.log(`   ✅ Importada: ${resultado.titulo}`);
          sucessos++;
        } else {
          console.error(`   ❌ Erro: ${resultado.titulo}`);
          erros++;
        }
        
        await new Promise(resolve => setTimeout(resolve, 200));
      }

      console.log(`\n📊 Resultado Final:`);
      console.log(`   🗑️  Deletadas: ${deletadas}`);
      console.log(`   ✅ Importadas: ${sucessos}`);
      console.log(`   ❌ Erros: ${erros}`);
      console.log(`   📝 Total: ${noticias.length}`);
    });
}

substituirNoticias();

