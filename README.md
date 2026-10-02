# ONG Mãos Abertas - Plataforma Web Responsiva

Este projeto consiste na interface web para a **ONG Mãos Abertas**, desenvolvida com foco em acessibilidade, usabilidade e boas práticas de front-end. A solução atende a requisitos acadêmicos e do terceiro setor para captação de voluntários e divulgação de causas sociais.

---

## 🌐 Deploy em Produção

O projeto está publicado e acessível globalmente via **Vercel**:
👉 **[site-ong-maos-abertas-dlm8.vercel.app](https://site-ong-maos-abertas-dlm8.vercel.app)**

---

## 🚀 Tecnologias Utilizadas

* **HTML5 Semântico:** Estruturação acessível e otimizada para motores de busca.
* **CSS3 Avançado:**
  * **Design System:** Uso de variáveis CSS (`:root`) para padronização de cores, tipografia e espaçamentos.
  * **Layout Fluido:** Sistema de Grid de 12 colunas para a macroestrutura e Flexbox para alinhamentos internos.
  * **Navegação Responsiva:** Menu com suporte a *dropdown* (desktop) e hambúrguer (mobile) implementado via *Checkbox Hack* puro.
  * **Interatividade & Feedback Visual:** Estados em botões (`:hover`, `:focus-visible`, `:active`), validação visual de formulários e componentes como *badges*, *alerts* e *toasts*.
* **JavaScript Vanilla (ES6+):** Roteamento de SPA via *hash*, aplicação de máscaras dinâmicas (CPF, CEP, Telefone), validação de formulário e persistência em `localStorage`.

---

## 📁 Estrutura de Arquivos

site-ong/
├── html/
│   ├── assets/
│   │   └── imagens/
│   │       └── banner-ong.jpg
│   ├── css/
│   │   └── style.css
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── js/
│   └── main.js
└── README.md

---

## 💻 Como Executar o Projeto Localmente

1. **Clonar o repositório:**
   ```bash
   git clone [https://github.com/giovannamartinsm/site-ong-maos-abertas.git](https://github.com/giovannamartinsm/site-ong-maos-abertas.git)
