# 📦 Scripts de Importação em Lote

Scripts para importar notícias em massa no Strapi.

---

## 🔑 Passo 1: Obter API Token

1. Acesse o admin do Strapi: https://splendid-fish-5d9df6f8db.strapiapp.com/admin
2. Vá em **Settings → API Tokens**
3. Clique em **"Create new API Token"**
4. Configure:
   - **Name:** Script de Importação
   - **Token duration:** Unlimited
   - **Token type:** Full access
5. **Copie o token gerado** (só aparece uma vez!)

---

## 📝 Opção 1: Importar via JavaScript Array

### **1. Edite o arquivo `importar-noticias.js`:**

```javascript
const API_TOKEN = 'cole_seu_token_aqui';

const noticias = [
  {
    titulo: 'Sua Notícia',
    slug: 'sua-noticia',
    resumo: 'Resumo...',
    conteudo: '<p>Conteúdo HTML...</p>',
    autor: 'Autor',
    destaque: false,
    categoria: 1, // ID da categoria
  },
  // Adicione mais notícias...
];
```

### **2. Execute:**

```bash
cd /Users/danvitoriano/portal-noticias
node scripts/importar-noticias.js
```

---

## 📊 Opção 2: Importar via CSV

### **1. Prepare seu arquivo CSV:**

Edite `noticias-exemplo.csv` ou crie um novo com estas colunas:

```csv
titulo,slug,resumo,conteudo,autor,destaque,categoria_id
"Título da Notícia","slug-da-noticia","Resumo breve","<p>Conteúdo HTML</p>","Autor",false,1
```

### **2. Instale dependência:**

```bash
cd /Users/danvitoriano/portal-noticias/scripts
npm init -y
npm install csv-parser node-fetch
```

### **3. Configure o token no arquivo `importar-csv.js`:**

```javascript
const API_TOKEN = 'cole_seu_token_aqui';
```

### **4. Execute:**

```bash
cd /Users/danvitoriano/portal-noticias
node scripts/importar-csv.js
```

---

## 🎯 Dicas Importantes:

### **IDs das Categorias:**

Para saber o ID das categorias:

```bash
curl https://splendid-fish-5d9df6f8db.strapiapp.com/api/categorias
```

Ou veja no admin: Content Manager → Categoria

### **Formato do Conteúdo:**

- Use HTML para formatação: `<p>`, `<h2>`, `<strong>`, etc.
- Para quebras de linha use `<br>` ou `<p>`
- Para links: `<a href="url">texto</a>`

### **Destaque:**

- `true` = Aparece como notícia principal
- `false` = Notícia normal

### **Slug:**

- Use lowercase
- Sem espaços (use hífen)
- Sem caracteres especiais
- Exemplo: `"nova-tecnologia-2025"`

---

## ⚠️ Limitações:

- **Imagens:** Não podem ser importadas via script (adicione depois manualmente)
- **Rate Limit:** Se forem muitas notícias (>100), adicione delay entre requisições
- **Token:** Guarde o token em segurança, não commite no Git!

---

## 🔄 Adicionar Delay (para muitas notícias):

Se tiver mais de 100 notícias, adicione delay entre as requisições:

```javascript
// Adicione essa função antes do loop
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// No loop, adicione:
await delay(100); // 100ms entre cada notícia
```

---

## 📞 Precisa de Ajuda?

- Documentação Strapi API: https://docs.strapi.io/dev-docs/api/rest
- Crie notícia de teste primeiro para ver o formato correto

---

**Boa importação! 🚀**

