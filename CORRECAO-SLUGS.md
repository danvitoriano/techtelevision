# Correção de Slugs - Portal de Notícias

## Problema Identificado

As URLs das notícias estavam aparecendo como `/noticia/null` porque o campo `slug` não estava sendo retornado pela API do Strapi ou as notícias não tinham slugs gerados.

## Soluções Implementadas

### 1. Frontend - Especificação Explícita de Campos
Atualizamos as funções de busca no arquivo `frontend/lib/strapi.ts` para especificar explicitamente todos os campos que queremos receber, incluindo o `slug`:

```typescript
queryParams.append('fields[1]', 'slug');
```

### 2. Frontend - Fallback para DocumentId
Adicionamos uma proteção no componente `NoticiaCard.tsx` para usar o `documentId` como fallback caso o slug esteja `null`:

```typescript
const urlSlug = noticia.slug || noticia.documentId;
```

### 3. Backend - Busca por Slug ou DocumentId
A função `getNoticiaBySlug` agora tenta buscar primeiro pelo slug e, se não encontrar, tenta pelo documentId.

## Como Garantir que Novas Notícias Tenham Slugs

### Opção 1: No Painel do Strapi (Recomendado)

1. Acesse o painel administrativo do Strapi: `http://localhost:1337/admin`
2. Faça login com suas credenciais
3. Navegue até **Content Manager > Notícia**
4. Para cada notícia existente:
   - Clique em "Editar"
   - Verifique se o campo **Slug** está preenchido
   - Se estiver vazio, o Strapi gerará automaticamente baseado no título
   - Clique em **Save** e depois em **Publish**

### Opção 2: Regenerar Slugs Automaticamente (Para Muitas Notícias)

Se você tem muitas notícias sem slug, pode usar o painel do Strapi para editar e salvar em lote:

1. Acesse **Content Manager > Notícia**
2. Selecione todas as notícias que precisam de correção
3. Use a opção de edição em massa para forçar a regeneração dos slugs

### Opção 3: Script de Migração (Avançado)

Se necessário, você pode criar um script de migração no backend do Strapi:

```javascript
// backend/database/migrations/regenerate-slugs.js
const strapi = require('@strapi/strapi');

async function regenerateNoticiaSlugs() {
  const app = await strapi().load();
  
  const noticias = await strapi.entityService.findMany('api::noticia.noticia', {
    filters: {
      slug: null,
    },
  });

  for (const noticia of noticias) {
    await strapi.entityService.update('api::noticia.noticia', noticia.id, {
      data: {
        slug: noticia.titulo, // O Strapi gerará o slug automaticamente
      },
    });
  }

  console.log(`${noticias.length} notícias atualizadas com sucesso!`);
  await app.destroy();
}

regenerateNoticiaSlugs();
```

## Verificação

Para verificar se o problema foi resolvido:

1. Reinicie o servidor frontend (se estiver rodando):
   ```bash
   cd frontend
   npm run dev
   ```

2. Acesse a página inicial: `http://localhost:3000`

3. Clique em qualquer notícia e verifique se a URL está correta:
   - ✅ Correto: `/noticia/titulo-da-noticia` ou `/noticia/{documentId}`
   - ❌ Incorreto: `/noticia/null`

## Prevenção Futura

O campo `slug` está configurado como `uid` no schema do Strapi (`backend/src/api/noticia/content-types/noticia/schema.json`):

```json
"slug": {
  "type": "uid",
  "targetField": "titulo"
}
```

Isso significa que:
- **Novas notícias** terão o slug gerado automaticamente baseado no título
- **Notícias editadas** terão o slug regenerado se você modificar o título (opcionalmente)
- O slug é **único** e **obrigatório** para boas práticas de SEO

## Notas Técnicas

- O sistema agora é resiliente: mesmo que um slug seja `null`, a notícia será acessível via `documentId`
- Os campos são especificados explicitamente nas queries para garantir que todos os dados necessários sejam retornados
- A busca de notícias funciona tanto com `slug` quanto com `documentId`

