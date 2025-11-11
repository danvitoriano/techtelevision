# 🚀 CI/CD - Portal de Notícias

## 📋 Visão Geral

Este projeto possui uma infraestrutura completa de CI/CD (Integração Contínua e Entrega Contínua) usando GitHub Actions.

## 🔄 Workflows Configurados

### 1. **Backend CI/CD** (`backend-ci.yml`)

**Quando executa:**
- Push nas branches `main` ou `develop` com mudanças em `backend/`
- Pull Requests para `main` ou `develop` com mudanças em `backend/`

**O que faz:**
- ✅ Testa em Node.js 18.x e 20.x
- ✅ Instala dependências
- ✅ Verifica código (lint)
- ✅ Faz build do Strapi
- ✅ Executa testes
- ✅ Gera artefatos de build (na main)

### 2. **Frontend CI/CD** (`frontend-ci.yml`)

**Quando executa:**
- Push nas branches `main` ou `develop` com mudanças em `frontend/`
- Pull Requests para `main` ou `develop` com mudanças em `frontend/`

**O que faz:**
- ✅ Testa em Node.js 18.x e 20.x
- ✅ Instala dependências
- ✅ Verifica código (lint)
- ✅ Verifica tipos TypeScript
- ✅ Faz build do Next.js
- ✅ Executa testes
- ✅ Gera artefatos de build (na main)

### 3. **Full Stack CI** (`full-ci.yml`)

**Quando executa:**
- Push ou Pull Request para `main`

**O que faz:**
- ✅ Detecta quais partes mudaram (backend/frontend)
- ✅ Executa CI apenas para as partes modificadas
- ✅ Otimiza tempo de build
- ✅ Status check consolidado

### 4. **Security Scan** (`security.yml`)

**Quando executa:**
- Push nas branches `main` ou `develop`
- Pull Requests
- Agendado: toda segunda-feira às 9h

**O que faz:**
- 🔒 Scan de vulnerabilidades (npm audit)
- 🔒 Análise de dependências
- 🔒 Gera relatórios de segurança
- 🔒 Alerta sobre dependências vulneráveis

### 5. **CodeQL Analysis** (`codeql.yml`)

**Quando executa:**
- Push nas branches `main` ou `develop`
- Pull Requests
- Agendado: toda quarta-feira às 10h

**O que faz:**
- 🔍 Análise estática de código
- 🔍 Detecção de vulnerabilidades de segurança
- 🔍 Identifica bugs potenciais
- 🔍 Reporta no GitHub Security

## 🤖 Dependabot

Configurado para atualizar automaticamente dependências:

- **Backend**: Atualiza pacotes npm toda segunda às 9h
- **Frontend**: Atualiza pacotes npm toda segunda às 9h
- **GitHub Actions**: Atualiza actions toda segunda às 9h

## 🔐 Secrets Necessários

Para habilitar deploy automático, configure os seguintes secrets no GitHub:

### Para Vercel (Frontend)
```
VERCEL_TOKEN          # Token de autenticação da Vercel
VERCEL_ORG_ID         # ID da organização
VERCEL_PROJECT_ID     # ID do projeto
```

### Para Strapi Cloud (Backend)
```
STRAPI_CLOUD_TOKEN    # Token do Strapi Cloud
```

### Para Railway (Backend alternativo)
```
RAILWAY_TOKEN         # Token do Railway
```

### Variáveis de Ambiente
```
NEXT_PUBLIC_STRAPI_URL    # URL da API Strapi em produção
```

## 📝 Como Configurar Secrets

1. Vá em: **Settings → Secrets and variables → Actions**
2. Clique em **New repository secret**
3. Adicione cada secret necessário

## 🚀 Habilitando Deploy Automático

### Deploy do Frontend (Vercel)

1. Crie conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Obtenha os tokens necessários
4. Configure os secrets no GitHub
5. Descomente a seção `deploy-vercel` em `frontend-ci.yml`

### Deploy do Backend (Strapi Cloud)

1. Crie conta em [strapi.io/cloud](https://strapi.io/cloud)
2. Conecte seu repositório GitHub
3. Configure variáveis de ambiente
4. Descomente a seção `deploy` em `backend-ci.yml`

### Deploy do Backend (Railway)

```yaml
- name: Deploy para Railway
  run: |
    npm i -g @railway/cli
    railway login --browserless
    railway up
  env:
    RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}
```

## 📊 Status Badges

Adicione badges ao README para mostrar status do CI/CD:

```markdown
![Backend CI](https://github.com/danvitoriano/techtelevision/actions/workflows/backend-ci.yml/badge.svg)
![Frontend CI](https://github.com/danvitoriano/techtelevision/actions/workflows/frontend-ci.yml/badge.svg)
![Security](https://github.com/danvitoriano/techtelevision/actions/workflows/security.yml/badge.svg)
```

## 🔧 Comandos Locais

Teste o CI localmente antes de fazer push:

```bash
# Backend
cd backend
npm ci
npm run build
npm test

# Frontend
cd frontend
npm ci
npm run lint
npm run build
npm test
```

## 📈 Monitoramento

- **Actions**: Veja todos os workflows em `Actions` no GitHub
- **Security**: Veja alertas em `Security → Dependabot alerts`
- **Insights**: Veja métricas em `Insights → Pulse`

## 🎯 Boas Práticas

1. ✅ Sempre crie Pull Requests (nunca commit direto na main)
2. ✅ Aguarde CI passar antes de fazer merge
3. ✅ Revise alertas de segurança semanalmente
4. ✅ Mantenha dependências atualizadas
5. ✅ Adicione testes para novas features
6. ✅ Use commits semânticos:
   - `feat:` - Nova feature
   - `fix:` - Correção de bug
   - `docs:` - Documentação
   - `chore:` - Manutenção
   - `refactor:` - Refatoração
   - `test:` - Testes

## 🆘 Troubleshooting

### CI está falhando

1. Verifique os logs no GitHub Actions
2. Execute os comandos localmente
3. Verifique se todas as dependências estão instaladas
4. Verifique variáveis de ambiente

### Build demora muito

1. Use cache de dependências (já configurado)
2. Execute apenas para arquivos modificados (já configurado)
3. Paralelizar testes quando possível

### Erros de permissão

1. Verifique permissões do token
2. Configure GITHUB_TOKEN corretamente
3. Revise permissões de workflows

## 📚 Recursos Adicionais

- [Documentação GitHub Actions](https://docs.github.com/actions)
- [Vercel Deployment](https://vercel.com/docs)
- [Strapi Cloud](https://strapi.io/cloud)
- [Railway Docs](https://docs.railway.app)

---

**Mantido por:** Tech Television Brasil  
**Última atualização:** 2025-11-11

