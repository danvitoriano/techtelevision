# 🚀 Início Rápido - Portal de Notícias

Guia rápido para colocar o portal de notícias no ar em poucos minutos!

## 📝 Passo a Passo

### 1️⃣ Iniciar o Backend (Strapi)

```bash
# Abra um terminal na pasta do projeto
cd ~/portal-noticias/backend

# Inicie o Strapi
npm run develop
```

✅ O Strapi abrirá automaticamente em: `http://localhost:1337/admin`

### 2️⃣ Criar Usuário Administrador

1. Preencha o formulário de criação de conta
2. Faça login no painel

### 3️⃣ Configurar Permissões

1. No painel do Strapi, clique em **Settings** (⚙️)
2. Vá em **Users & Permissions Plugin** → **Roles** → **Public**
3. Na seção **Permissions**, expanda e marque:
   - ✅ **Noticia**: `find` e `findOne`
   - ✅ **Categoria**: `find` e `findOne`
4. Clique em **Save** (💾)

### 4️⃣ Adicionar Conteúdo

#### Criar Categorias:
1. Menu lateral → **Content Manager**
2. **Categoria** → **Create new entry**
3. Adicione: Tecnologia, Esportes, Política, etc.
4. **Save** (💾)

#### Criar Notícias:
1. **Content Manager** → **Notícia** → **Create new entry**
2. Preencha:
   - ✏️ Título
   - 📝 Resumo
   - 📄 Conteúdo
   - 👤 Autor
   - 🏷️ Categoria
   - 🖼️ Imagem (opcional)
   - ⭐ Destaque (para aparecer no topo)
3. **Save** → **Publish** (🚀)

### 5️⃣ Iniciar o Frontend

```bash
# Abra um NOVO terminal
cd ~/portal-noticias/frontend

# Inicie o Next.js
npm run dev
```

✅ Acesse: `http://localhost:3000`

## 🎉 Pronto!

Seu portal de notícias está funcionando! 

### 📍 URLs Importantes

- 🌐 **Site**: http://localhost:3000
- ⚙️ **Painel Admin**: http://localhost:1337/admin

## 💡 Dicas

- 📸 Sempre faça **Publish** após criar/editar notícias
- ⭐ Marque uma notícia como **Destaque** para aparecer no topo
- 🔄 O frontend atualiza automaticamente quando você adiciona conteúdo
- 🎨 Use imagens com boas resoluções para melhor visual

## ❓ Problemas?

### Frontend não mostra notícias
✅ Verifique se:
- O Strapi está rodando
- As permissões públicas estão configuradas
- As notícias estão publicadas (não apenas salvas)

### Imagens não aparecem
✅ Verifique se:
- A imagem foi enviada no Strapi
- A notícia foi publicada

## 📚 Documentação Completa

Para mais detalhes, consulte o `README.md` principal.

---

**Bom uso! 🎊**

