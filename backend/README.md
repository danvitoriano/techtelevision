# Portal de Notícias - Backend (Strapi CMS)

Backend do Portal de Notícias usando Strapi como Headless CMS com SQLite.

## 🚀 Início Rápido

```bash
# Instalar dependências
npm install

# Iniciar em modo desenvolvimento
npm run develop
```

O painel administrativo estará disponível em `http://localhost:1337/admin`

## 📋 Content Types

### Notícia
- **titulo** (String) - Título da notícia
- **slug** (UID) - URL amigável (gerado automaticamente)
- **resumo** (Text) - Resumo/descrição curta
- **conteudo** (Rich Text) - Conteúdo completo da notícia
- **imagem** (Media) - Imagem de destaque
- **autor** (String) - Nome do autor
- **categoria** (Relation) - Relação com Categoria
- **destaque** (Boolean) - Marcar como notícia em destaque

### Categoria
- **nome** (String) - Nome da categoria
- **slug** (UID) - URL amigável (gerado automaticamente)
- **descricao** (Text) - Descrição da categoria
- **noticias** (Relation) - Relação com Notícias

## ⚙️ Configuração de Permissões

Para permitir que o frontend acesse os dados:

1. Acesse `http://localhost:1337/admin`
2. Vá em **Settings** > **Users & Permissions Plugin** > **Roles** > **Public**
3. Habilite as seguintes permissões:
   - **Noticia**: `find`, `findOne`
   - **Categoria**: `find`, `findOne`
4. Salve as alterações

## 🗄️ Banco de Dados

O projeto usa **SQLite** por padrão (arquivo local `.tmp/data.db`).

### Mudar para PostgreSQL (Produção)

1. Instale o driver do PostgreSQL:
```bash
npm install pg
```

2. Edite `config/database.js`:
```javascript
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'strapi'),
      ssl: env.bool('DATABASE_SSL', false) && {
        rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false),
      },
    },
  },
});
```

3. Configure as variáveis de ambiente no arquivo `.env`

## 🛠️ Scripts Disponíveis

- `npm run develop` - Inicia em modo desenvolvimento (porta 1337)
- `npm run build` - Cria build de produção
- `npm run start` - Inicia servidor de produção
- `npm run strapi` - Executa comandos CLI do Strapi

## 🔒 Segurança

- Altere as chaves secretas em `.env` antes de ir para produção
- Use senhas fortes para o usuário administrador
- Configure SSL/HTTPS em produção
- Mantenha as permissões públicas restritas apenas ao necessário

## 📝 API Endpoints

### Notícias
- `GET /api/noticias` - Lista todas as notícias
- `GET /api/noticias/:id` - Busca notícia por ID
- `GET /api/noticias?filters[slug][$eq]=:slug` - Busca por slug

### Categorias
- `GET /api/categorias` - Lista todas as categorias
- `GET /api/categorias/:id` - Busca categoria por ID
- `GET /api/categorias?filters[slug][$eq]=:slug` - Busca por slug

### Exemplos de Queries

```bash
# Buscar notícias com populate
GET /api/noticias?populate=*

# Filtrar por categoria
GET /api/noticias?filters[categoria][slug][$eq]=tecnologia

# Ordenar por data
GET /api/noticias?sort[0]=publishedAt:desc

# Paginação
GET /api/noticias?pagination[page]=1&pagination[pageSize]=10
```

## 🚀 Deploy

### Opções Gratuitas

1. **Railway**
   - Suporta SQLite/PostgreSQL
   - Deploy automático via Git
   - Tier gratuito generoso

2. **Render**
   - PostgreSQL gratuito
   - Deploy via Git
   - Hibernação após inatividade

3. **Heroku**
   - PostgreSQL addon gratuito
   - Deploy via Git
   - Lembre-se que SQLite não funciona no Heroku

### Preparação para Deploy

1. Altere as chaves secretas no `.env`
2. Configure banco de dados para produção
3. Configure CORS apropriadamente
4. Habilite apenas permissões necessárias

## 📚 Documentação

- [Documentação Strapi](https://docs.strapi.io)
- [API Reference](https://docs.strapi.io/dev-docs/api/rest)
- [Content Type Builder](https://docs.strapi.io/user-docs/content-type-builder)

## 🐛 Troubleshooting

### Erro ao iniciar
- Delete a pasta `.tmp` e inicie novamente
- Verifique se a porta 1337 está disponível

### Erro de permissões
- Verifique as configurações em Users & Permissions
- Confirme que os content types foram criados corretamente

### Upload de imagens não funciona
- Verifique as permissões da pasta `public/uploads`
- Confirme que o content type tem campo de media

## 📝 Mais Informações

Consulte o README principal na raiz do projeto para documentação completa.

