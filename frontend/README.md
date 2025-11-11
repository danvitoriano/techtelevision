# Portal de Notícias - Frontend

Frontend do Portal de Notícias desenvolvido com Next.js 14, React e TypeScript.

## 🚀 Início Rápido

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:3000`

## 📋 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

## 🏗️ Estrutura

```
frontend/
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── noticia/[slug]/    # Página de notícia individual
│   ├── categoria/[slug]/  # Página de categoria
│   └── not-found.tsx      # Página 404
├── components/            # Componentes React
│   ├── Header.tsx         # Cabeçalho do site
│   ├── Footer.tsx         # Rodapé do site
│   └── NoticiaCard.tsx    # Card de notícia
├── lib/                   # Utilitários
│   └── strapi.ts          # Cliente API Strapi
└── types/                 # Tipos TypeScript
    └── index.ts           # Interfaces do projeto
```

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa linter

## 📦 Dependências Principais

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## 🎨 Customização

### Cores e Tema

Edite o arquivo `tailwind.config.ts` para personalizar cores e tema.

### Componentes

Todos os componentes estão em `components/` e podem ser personalizados conforme necessário.

## 🚀 Deploy

### Deploy Automático Configurado ✅

Este projeto possui deploy automático na Vercel via GitHub Actions!

- ✅ Deploy automático ao fazer push na branch `main`
- ✅ CI/CD completo com testes e validações
- ✅ URL de produção: https://techtelevision-dvitorianos-projects.vercel.app

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Importe o projeto no Vercel
3. Configure a variável de ambiente `NEXT_PUBLIC_STRAPI_URL`
4. Deploy!

### Outras Plataformas

O projeto pode ser deployed em qualquer plataforma que suporte Next.js:
- Netlify
- Cloudflare Pages
- AWS Amplify

## 📝 Mais Informações

Consulte o README principal na raiz do projeto para documentação completa.
