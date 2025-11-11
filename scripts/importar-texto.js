/**
 * Script para importar notícias a partir de formato texto simples
 * 
 * FORMATO DO TEXTO:
 * ---
 * TITULO: Título da Notícia
 * SLUG: titulo-da-noticia
 * RESUMO: Resumo breve da notícia
 * AUTOR: Nome do Autor (opcional)
 * DESTAQUE: true/false (opcional, padrão: false)
 * CATEGORIA: 1 (ID da categoria, padrão: 1)
 * CONTEUDO:
 * Parágrafo 1 do conteúdo.
 * 
 * Parágrafo 2 do conteúdo.
 * ---
 * 
 * USO:
 * 1. Cole suas notícias no formato acima no arquivo noticias.txt
 * 2. Obtenha API Token no Strapi
 * 3. Execute: node scripts/importar-texto.js
 */

const fs = require('fs');
const path = require('path');

const STRAPI_URL = 'https://splendid-fish-5d9df6f8db.strapiapp.com';
const API_TOKEN = 'SEU_TOKEN_AQUI'; // Obtenha em Settings → API Tokens
const TEXTO_FILE = path.join(__dirname, 'noticias.txt');

function converterTextoParaHTML(texto) {
  // Converte texto simples em HTML
  return texto
    .split('\n\n')
    .filter(p => p.trim())
    .map(paragrafo => `<p>${paragrafo.trim()}</p>`)
    .join('\n');
}

function parseNoticias(textoCompleto) {
  const blocos = textoCompleto.split('---').filter(b => b.trim());
  const noticias = [];

  for (const bloco of blocos) {
    const linhas = bloco.split('\n').filter(l => l.trim());
    const noticia = {
      titulo: '',
      slug: '',
      resumo: '',
      conteudo: '',
      autor: null,
      destaque: false,
      categoria: 1,
    };

    let capturandoConteudo = false;
    let conteudoLinhas = [];

    for (const linha of linhas) {
      if (linha.startsWith('TITULO:')) {
        noticia.titulo = linha.replace('TITULO:', '').trim();
      } else if (linha.startsWith('SLUG:')) {
        noticia.slug = linha.replace('SLUG:', '').trim();
      } else if (linha.startsWith('RESUMO:')) {
        noticia.resumo = linha.replace('RESUMO:', '').trim();
      } else if (linha.startsWith('AUTOR:')) {
        noticia.autor = linha.replace('AUTOR:', '').trim();
      } else if (linha.startsWith('DESTAQUE:')) {
        noticia.destaque = linha.replace('DESTAQUE:', '').trim() === 'true';
      } else if (linha.startsWith('CATEGORIA:')) {
        noticia.categoria = parseInt(linha.replace('CATEGORIA:', '').trim());
      } else if (linha.startsWith('CONTEUDO:')) {
        capturandoConteudo = true;
      } else if (capturandoConteudo) {
        conteudoLinhas.push(linha);
      }
    }

    if (conteudoLinhas.length > 0) {
      noticia.conteudo = converterTextoParaHTML(conteudoLinhas.join('\n'));
    }

    // Gerar slug automaticamente se não fornecido
    if (!noticia.slug && noticia.titulo) {
      noticia.slug = noticia.titulo
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove acentos
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    }

    if (noticia.titulo && noticia.resumo && noticia.conteudo) {
      noticias.push(noticia);
    }
  }

  return noticias;
}

async function importarNoticia(noticia) {
  try {
    const response = await fetch(`${STRAPI_URL}/api/noticias`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify({ data: noticia }),
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

async function importarTexto() {
  console.log('🚀 Iniciando importação de notícias do arquivo de texto...\n');

  // Ler arquivo
  const textoCompleto = fs.readFileSync(TEXTO_FILE, 'utf-8');
  const noticias = parseNoticias(textoCompleto);

  console.log(`📋 Encontradas ${noticias.length} notícias no arquivo\n`);

  if (noticias.length === 0) {
    console.log('❌ Nenhuma notícia válida encontrada.');
    console.log('📝 Verifique o formato do arquivo noticias.txt\n');
    return;
  }

  let sucessos = 0;
  let erros = 0;

  for (const noticia of noticias) {
    const resultado = await importarNoticia(noticia);
    
    if (resultado.success) {
      console.log(`✅ Importada: ${resultado.titulo}`);
      sucessos++;
    } else {
      console.error(`❌ Erro: ${resultado.titulo}`);
      console.error(`   ${resultado.error}\n`);
      erros++;
    }

    // Delay de 200ms entre requisições
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  console.log(`\n📊 Resultado:`);
  console.log(`   ✅ Sucesso: ${sucessos}`);
  console.log(`   ❌ Erros: ${erros}`);
  console.log(`   📝 Total: ${noticias.length}`);
}

importarTexto();

