# 📝 Como Importar Notícias de Texto

Guia simples para importar notícias que você tem em formato texto!

---

## 🚀 Passo a Passo:

### **1. Prepare o arquivo `noticias.txt`**

Abra o arquivo `scripts/noticias.txt` e cole suas notícias neste formato:

```
---
TITULO: Título da Sua Notícia
SLUG: titulo-da-noticia (opcional - será gerado automaticamente)
RESUMO: Resumo breve de 1-2 linhas
AUTOR: Seu Nome (opcional)
DESTAQUE: false (ou true para destacar)
CATEGORIA: 1 (1=tecnologia, veja IDs abaixo)
CONTEUDO:
Primeiro parágrafo da notícia com o texto completo.

Segundo parágrafo. Deixe uma linha em branco entre parágrafos.

Terceiro parágrafo. O script vai converter isso em HTML automaticamente.
---
```

### **2. Obtenha o API Token**

1. Acesse: https://splendid-fish-5d9df6f8db.strapiapp.com/admin/settings/api-tokens
2. Clique em **"Create new API Token"**
3. Configure:
   - Name: `Importação de Notícias`
   - Duration: `Unlimited`
   - Type: `Full access`
4. **Copie o token** (aparece só uma vez!)

### **3. Configure o token no script**

Abra o arquivo `scripts/importar-texto.js` e cole seu token:

```javascript
const API_TOKEN = 'cole_seu_token_aqui';
```

### **4. Execute o script**

```bash
cd /Users/danvitoriano/portal-noticias
node scripts/importar-texto.js
```

---

## 📋 **IDs das Categorias:**

Para descobrir os IDs das categorias disponíveis:

```bash
curl https://splendid-fish-5d9df6f8db.strapiapp.com/api/categorias
```

Ou veja no admin: **Content Manager → Categoria**

---

## ✨ **Dicas:**

### **Slug Automático:**
Se você não especificar o SLUG, ele será gerado automaticamente a partir do título:
- "Nova Tecnologia 2025" → "nova-tecnologia-2025"
- Remove acentos e caracteres especiais

### **Formatação:**
- **Parágrafos:** Deixe linha em branco entre parágrafos
- **Títulos no conteúdo:** O script converte em `<p>` automaticamente
- **Negrito/Itálico:** Não suportado por padrão (adicione HTML se precisar)

### **Múltiplas Notícias:**
Separe cada notícia com `---` no início e fim:

```
---
TITULO: Notícia 1
...
---
TITULO: Notícia 2
...
---
TITULO: Notícia 3
...
---
```

### **Campos Opcionais:**
- **SLUG:** Gerado automaticamente se não fornecido
- **AUTOR:** Se não informado, fica vazio
- **DESTAQUE:** Padrão é `false`
- **CATEGORIA:** Padrão é `1` (tecnologia)

---

## 🎯 **Exemplo Completo:**

Veja o arquivo `noticias.txt` com 3 notícias de exemplo prontas para usar!

---

## ⚠️ **Troubleshooting:**

### **Erro: "API Token inválido"**
→ Verifique se copiou o token corretamente no script

### **Erro: "Categoria não encontrada"**
→ Use um ID de categoria que existe (1, 2, 3...)

### **Slug duplicado:**
→ Cada notícia precisa ter um slug único

### **Notícia não aparece no site:**
→ Verifique se clicou em "Publish" no Strapi após importar

---

## 💡 **Quer adicionar mais formatação?**

Se precisar de **negrito**, **links** ou **listas** no conteúdo, use HTML:

```
CONTEUDO:
Este é um <strong>texto em negrito</strong> e este é um <a href="https://exemplo.com">link</a>.

Lista de itens:
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

---

**Pronto! É só colar suas notícias no formato e executar o script!** 🚀

