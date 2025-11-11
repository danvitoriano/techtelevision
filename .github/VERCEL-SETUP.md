# 🚀 Configuração de Deploy Automático na Vercel

Este guia mostra como configurar o deploy automático do frontend na Vercel usando GitHub Actions.

## 📋 Pré-requisitos

- ✅ Conta na Vercel (já possui)
- ✅ Repositório no GitHub (já configurado)
- ✅ Acesso de administrador ao repositório

## 🔑 Passo 1: Obter o Token da Vercel

1. Acesse: https://vercel.com/account/tokens
2. Clique em **"Create"** ou **"Create Token"**
3. Dê um nome ao token: `GitHub Actions - Portal Notícias`
4. Selecione o escopo: **Full Account**
5. Clique em **"Create Token"**
6. **⚠️ COPIE O TOKEN AGORA** (ele só aparece uma vez!)
   - Guarde em local seguro temporariamente

## 🎯 Passo 2: Obter IDs do Projeto

### Opção A: Via Dashboard Vercel (Mais Fácil)

1. Acesse https://vercel.com/dashboard
2. **Importe o projeto do GitHub** (se ainda não fez):
   - Clique em **"Add New Project"**
   - Selecione **"Import Git Repository"**
   - Escolha: `danvitoriano/techtelevision`
   - Configure:
     - **Framework Preset**: Next.js
     - **Root Directory**: `frontend`
     - **Build Command**: `npm run build`
     - **Output Directory**: `.next`
   - Adicione variável de ambiente:
     - `NEXT_PUBLIC_STRAPI_URL`: URL do seu Strapi (pode ser temporário)
   - Clique em **Deploy**

3. Após importar, vá nas configurações do projeto:
   - No dashboard da Vercel, clique no projeto
   - Vá em **Settings → General**
   - Copie as informações:

### Para obter VERCEL_ORG_ID:
- Vá em: https://vercel.com/account
- Na URL você verá algo como: `https://vercel.com/[seu-username]`
- Ou em **Settings → General** do projeto, procure por **"Team ID"** ou **"Organization ID"**

### Para obter VERCEL_PROJECT_ID:
- Nas configurações do projeto (Settings → General)
- Procure por **"Project ID"**
- Copie o valor

### Opção B: Via CLI Vercel (Alternativa)

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Fazer login
vercel login

# 3. Navegar até o frontend
cd /Users/danvitoriano/portal-noticias/frontend

# 4. Link do projeto (cria arquivo .vercel)
vercel link

# 5. Ver as configurações
cat .vercel/project.json
```

O arquivo mostrará:
```json
{
  "orgId": "seu-org-id-aqui",
  "projectId": "seu-project-id-aqui"
}
```

## 🔐 Passo 3: Configurar Secrets no GitHub

1. Acesse seu repositório no GitHub:
   https://github.com/danvitoriano/techtelevision

2. Vá em: **Settings → Secrets and variables → Actions**

3. Clique em **"New repository secret"**

4. Adicione cada secret:

### Secret 1: VERCEL_TOKEN
- **Name**: `VERCEL_TOKEN`
- **Value**: Cole o token que você copiou no Passo 1
- Clique em **"Add secret"**

### Secret 2: VERCEL_ORG_ID
- **Name**: `VERCEL_ORG_ID`
- **Value**: Cole o Organization ID
- Clique em **"Add secret"**

### Secret 3: VERCEL_PROJECT_ID
- **Name**: `VERCEL_PROJECT_ID`
- **Value**: Cole o Project ID
- Clique em **"Add secret"**

### Secret 4: NEXT_PUBLIC_STRAPI_URL (Opcional por enquanto)
- **Name**: `NEXT_PUBLIC_STRAPI_URL`
- **Value**: URL da API Strapi em produção
  - Se ainda não tem, use: `http://localhost:1337` (temporário)
  - Depois atualize com a URL real do Strapi em produção
- Clique em **"Add secret"**

## ✅ Passo 4: Verificar Configuração

Após adicionar os secrets, você deve ter:

```
✅ VERCEL_TOKEN          (Formato: token-xxxxxxxxxxxxxxxxxxxxxxxx)
✅ VERCEL_ORG_ID         (Formato: team_xxxxxxxxxxxxxxxxxx ou prj_xxxxxx)
✅ VERCEL_PROJECT_ID     (Formato: prj_xxxxxxxxxxxxxxxxxxxxxx)
✅ NEXT_PUBLIC_STRAPI_URL (URL da API)
```

## 🚀 Passo 5: Testar o Deploy

O deploy automático será acionado quando:
1. Você fizer push para a branch `main`
2. Com mudanças na pasta `frontend/`

Para testar agora:

```bash
cd /Users/danvitoriano/portal-noticias
git add .github/
git commit -m "feat: Habilita deploy automático na Vercel"
git push origin main
```

## 📊 Monitorar o Deploy

1. Vá em: https://github.com/danvitoriano/techtelevision/actions
2. Clique no workflow **"Frontend CI/CD"**
3. Acompanhe o job **"Deploy para Vercel"**
4. Quando terminar, acesse: https://vercel.com/dashboard para ver o site

## 🔧 Configuração Adicional na Vercel

### Domínio Personalizado (Opcional)

1. Na Vercel, vá em **Settings → Domains**
2. Adicione seu domínio personalizado
3. Configure DNS conforme instruções da Vercel

### Variáveis de Ambiente

Na Vercel, adicione as mesmas variáveis:
- **Settings → Environment Variables**
- Adicione: `NEXT_PUBLIC_STRAPI_URL`

### Branch Previews

Para ativar deploys de preview em PRs:
1. **Settings → Git**
2. Marque: **"Deploy Previews"**
3. Agora cada PR terá uma URL de preview

## 🐛 Troubleshooting

### Erro: "Project not found"
- Verifique se `VERCEL_PROJECT_ID` está correto
- Certifique-se de que o token tem permissão para o projeto

### Erro: "Unauthorized"
- Verifique se `VERCEL_TOKEN` está correto
- Gere um novo token se necessário

### Erro: "Build failed"
- Verifique se a pasta `frontend/` tem `package.json`
- Confirme que `npm run build` funciona localmente
- Verifique os logs no GitHub Actions

### Frontend não conecta com Strapi
- Atualize `NEXT_PUBLIC_STRAPI_URL` com a URL correta
- Certifique-se de que o Strapi está acessível publicamente
- Configure CORS no Strapi para permitir o domínio da Vercel

## 🔗 URLs Úteis

- **Dashboard Vercel**: https://vercel.com/dashboard
- **Tokens da Vercel**: https://vercel.com/account/tokens
- **GitHub Actions**: https://github.com/danvitoriano/techtelevision/actions
- **Documentação Vercel**: https://vercel.com/docs

## 📈 Próximos Passos

Após configurar o frontend:

1. **Deploy do Backend (Strapi)**
   - Strapi Cloud: https://strapi.io/cloud
   - Railway: https://railway.app
   - Render: https://render.com

2. **Atualizar NEXT_PUBLIC_STRAPI_URL**
   - Com a URL real do Strapi em produção
   - No GitHub Secrets e na Vercel

3. **Configurar Domínio**
   - Adicionar domínio personalizado
   - Configurar DNS

4. **Habilitar Analytics**
   - Vercel Analytics
   - Google Analytics

---

**Dúvidas?** Consulte a [documentação oficial da Vercel](https://vercel.com/docs/concepts/deployments/overview) ou abra uma issue no GitHub.

