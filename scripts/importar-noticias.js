/**
 * Script para importar notícias em lote no Strapi
 * 
 * USO:
 * 1. Edite o array 'noticias' abaixo com suas notícias
 * 2. Execute: node scripts/importar-noticias.js
 */

const STRAPI_URL = 'https://splendid-fish-5d9df6f8db.strapiapp.com';
const API_TOKEN = 'b8819f9f21af4cda16001c26cb7b262dc8f8319d2a1f01312f35b31dc2ae116a3cffb12bb9a8b2f146fc011a2caa50cf85cac5bacbd64caa6e3d5062701e305cf6fe4b74ce6fbbee1ddb87a7e4212138ecf1d2995791a44476b1047dc9b028803807d046c9c23d17ec733a2432c6c3d006f607eff3ddbb8dd380fd3bd4dbfc07'; // Obtenha em Settings → API Tokens

// Dados das notícias para importar
const noticias = [
  {
    titulo: 'Exemplo de Notícia 1',
    slug: 'exemplo-noticia-1',
    resumo: 'Resumo breve da notícia 1',
    conteudo: '<p>Conteúdo completo da notícia 1 em HTML</p>',
    autor: 'Seu Nome',
    destaque: false,
    categoria: 1, // ID da categoria (tecnologia = 1)
    // imagem: null, // Adicione depois manualmente ou via upload
  },
  {
    titulo: 'Exemplo de Notícia 2',
    slug: 'exemplo-noticia-2',
    resumo: 'Resumo breve da notícia 2',
    conteudo: '<p>Conteúdo completo da notícia 2 em HTML</p>',
    autor: 'Seu Nome',
    destaque: false,
    categoria: 1,
  },
  // Adicione mais notícias aqui...
];

async function importarNoticias() {
  console.log(`🚀 Iniciando importação de ${noticias.length} notícias...\n`);
  
  let sucessos = 0;
  let erros = 0;

  for (const noticia of noticias) {
    try {
      const response = await fetch(`${STRAPI_URL}/api/noticias`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({
          data: noticia
        }),
      });

      if (response.ok) {
        console.log(`✅ Importada: ${noticia.titulo}`);
        sucessos++;
      } else {
        const error = await response.text();
        console.error(`❌ Erro ao importar "${noticia.titulo}":`, error);
        erros++;
      }
    } catch (error) {
      console.error(`❌ Erro na requisição "${noticia.titulo}":`, error.message);
      erros++;
    }
  }

  console.log(`\n📊 Resultado:`);
  console.log(`   ✅ Sucesso: ${sucessos}`);
  console.log(`   ❌ Erros: ${erros}`);
  console.log(`   📝 Total: ${noticias.length}`);
}

// Executar importação
importarNoticias();

