# Portal de Notícias

![Backend CI](https://github.com/danvitoriano/techtelevision/actions/workflows/backend-ci.yml/badge.svg)
![Frontend CI](https://github.com/danvitoriano/techtelevision/actions/workflows/frontend-ci.yml/badge.svg)
![Full Stack CI](https://github.com/danvitoriano/techtelevision/actions/workflows/full-ci.yml/badge.svg)
![Security](https://github.com/danvitoriano/techtelevision/actions/workflows/security.yml/badge.svg)
![CodeQL](https://github.com/danvitoriano/techtelevision/actions/workflows/codeql.yml/badge.svg)

Portal de notícias moderno e responsivo desenvolvido com **Next.js 14**, **TypeScript**, **React** e **Strapi** como Headless CMS.

🚀 **Deploy Automático Configurado** | 🌐 **[Ver site online](https://techtelevision-dvitorianos-projects.vercel.app)**

## 🚀 Tecnologias Utilizadas

### Frontend
- **Next.js 14** - Framework React com Server Side Rendering
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **React** - Biblioteca para construção de interfaces

### Backend (CMS)
- **Strapi** - Headless CMS open-source
- **SQLite** - Banco de dados leve e gratuito (arquivo local)

## ✨ Características

- ✅ 100% Gratuito (sem necessidade de serviços pagos)
- ✅ Interface moderna e responsiva
- ✅ Sistema de categorias
- ✅ Destaque de notícias principais
- ✅ Upload de imagens
- ✅ Editor de texto rico (Rich Text)
- ✅ Sistema de busca e filtragem
- ✅ SEO otimizado
- ✅ TypeScript em todo o projeto

## 📋 Pré-requisitos

- Node.js 18.x ou superior
- npm ou yarn

## 🔧 Instalação e Configuração

### 1. Clone o repositório (se aplicável)
```bash
git clone <url-do-repositorio>
cd portal-noticias
```

### 2. Configurar o Backend (Strapi)

```bash
cd backend

# Instalar dependências (se necessário)
npm install

# Iniciar o Strapi em modo desenvolvimento
npm run develop
```

O Strapi abrirá automaticamente em `http://localhost:1337/admin`

### 3. Criar usuário administrador

Na primeira vez que acessar o Strapi, você precisará criar uma conta de administrador:

1. Acesse `http://localhost:1337/admin`
2. Preencha os dados para criar sua conta
3. Faça login no painel administrativo

### 4. Configurar as permissões

Para que o frontend possa acessar os dados, você precisa configurar as permissões:

1. No painel do Strapi, vá em **Settings** (Configurações)
2. Clique em **Users & Permissions Plugin** > **Roles** > **Public**
3. Na seção **Permissions**, expanda:
   - **Noticia**: marque `find` e `findOne`
   - **Categoria**: marque `find` e `findOne`
4. Clique em **Save**

### 5. Adicionar conteúdo de exemplo

#### Criar Categorias:
1. No menu lateral, clique em **Content Manager**
2. Clique em **Categoria** > **Create new entry**
3. Adicione algumas categorias (ex: Política, Esportes, Tecnologia, Entretenimento)
4. Clique em **Save**

#### Criar Notícias:
1. No menu lateral, clique em **Content Manager**
2. Clique em **Notícia** > **Create new entry**
3. Preencha os campos:
   - Título
   - Resumo
   - Conteúdo (use o editor rico)
   - Autor
   - Categoria
   - Imagem (opcional)
   - Destaque (marque para aparecer no topo da página)
4. Clique em **Save** e depois em **Publish**

### 6. Configurar e Iniciar o Frontend (Next.js)

Abra um novo terminal:

```bash
cd frontend

# Instalar dependências (se necessário)
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

O frontend estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
portal-noticias/
├── backend/                 # Strapi CMS
│   ├── config/             # Configurações do Strapi
│   ├── src/
│   │   └── api/            # Content Types
│   │       ├── noticia/    # Schema de Notícias
│   │       └── categoria/  # Schema de Categorias
│   └── .env                # Variáveis de ambiente
│
└── frontend/               # Next.js App
    ├── app/                # App Router (Next.js 14)
    │   ├── page.tsx       # Página inicial
    │   ├── noticia/[slug]/  # Página individual de notícia
    │   └── categoria/[slug]/ # Página de categoria
    ├── components/         # Componentes React
    │   ├── Header.tsx
    │   ├── Footer.tsx
    │   └── NoticiaCard.tsx
    ├── lib/               # Funções utilitárias
    │   └── strapi.ts      # Integração com Strapi API
    ├── types/             # Tipos TypeScript
    │   └── index.ts
    └── .env.local         # Variáveis de ambiente
```

## 🎯 Funcionalidades

### Para Administradores (Painel Strapi)
- Criar, editar e deletar notícias
- Gerenciar categorias
- Upload de imagens
- Editor de texto rico
- Sistema de publicação (draft/published)
- Definir notícias em destaque

### Para Usuários (Frontend)
- Visualizar notícias em layout responsivo
- Filtrar notícias por categoria
- Ver notícias em destaque
- Navegação intuitiva
- Design moderno e clean

## 🔒 Segurança

O projeto está configurado com:
- Permissões públicas apenas para leitura (find/findOne)
- Acesso administrativo protegido por autenticação
- Validação de dados no Strapi
- TypeScript para type safety

## 🚀 Deploy

### Backend (Strapi)

Para produção, você pode usar serviços gratuitos como:
- **Railway** (recomendado) - Oferece PostgreSQL gratuito
- **Render** - Tier gratuito com PostgreSQL
- **Heroku** - Com addon PostgreSQL

Para produção, altere o banco de dados de SQLite para PostgreSQL no arquivo `config/database.js`.

### Frontend (Next.js)

Deploy gratuito em:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **Cloudflare Pages**

Lembre-se de configurar a variável de ambiente `NEXT_PUBLIC_STRAPI_URL` apontando para a URL do seu backend em produção.

## 📝 Comandos Úteis

### Backend
```bash
npm run develop    # Modo desenvolvimento (porta 1337)
npm run build      # Build para produção
npm run start      # Iniciar em produção
```

### Frontend
```bash
npm run dev        # Modo desenvolvimento (porta 3000)
npm run build      # Build para produção
npm run start      # Iniciar build de produção
npm run lint       # Verificar código
```

## 🐛 Solução de Problemas

### Erro de conexão entre Frontend e Backend
- Verifique se o Strapi está rodando na porta 1337
- Confirme as permissões públicas configuradas no Strapi
- Verifique o arquivo `.env.local` do frontend

### Imagens não aparecem
- Verifique se as imagens foram publicadas no Strapi
- Confirme a configuração de `remotePatterns` no `next.config.ts`
- Verifique se a URL do Strapi está correta

### Erro 404 ao acessar notícias
- Verifique se as notícias estão publicadas (não apenas salvas)
- Confirme que as permissões públicas estão habilitadas

## 📚 Recursos Adicionais

- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação Strapi](https://docs.strapi.io)
- [Documentação TypeScript](https://www.typescriptlang.org/docs)
- [Documentação Tailwind CSS](https://tailwindcss.com/docs)

## 🤝 Contribuindo

Sinta-se à vontade para contribuir com melhorias:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 🚀 CI/CD

Este projeto possui integração contínua e entrega contínua totalmente configurada com GitHub Actions:

- ✅ **Backend CI**: Build e testes automáticos do Strapi
- ✅ **Frontend CI**: Build, lint e testes do Next.js
- ✅ **Security Scan**: Análise de vulnerabilidades e dependências
- ✅ **CodeQL**: Análise estática de código
- ✅ **Dependabot**: Atualização automática de dependências

📚 **[Documentação completa do CI/CD](.github/CI-CD.md)**

### Status dos Workflows

- Backend CI: ![Backend CI](https://github.com/danvitoriano/techtelevision/actions/workflows/backend-ci.yml/badge.svg)
- Frontend CI: ![Frontend CI](https://github.com/danvitoriano/techtelevision/actions/workflows/frontend-ci.yml/badge.svg)
- Security: ![Security](https://github.com/danvitoriano/techtelevision/actions/workflows/security.yml/badge.svg)

## 📄 Licença

Este projeto é open source e está disponível sob a licença MIT.

## ✨ Próximos Passos

Possíveis melhorias futuras:
- [ ] Sistema de comentários
- [ ] Sistema de busca
- [ ] Newsletter
- [ ] Modo escuro
- [ ] Compartilhamento em redes sociais
- [ ] Paginação
- [ ] Sistema de tags
- [ ] Related posts
- [ ] Analytics

---

**Desenvolvido com ❤️ usando Next.js, TypeScript e Strapi**

# Deploy Tue Nov 11 01:51:19 -03 2025

# Deploy 2025-11-11 02:50:25

