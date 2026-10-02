# ONG Mãos Abertas - Plataforma Web Responsiva

Este projeto consiste na interface web para a **ONG Mãos Abertas**, desenvolvida com foco em acessibilidade, usabilidade e boas práticas de front-end. A solução atende a requisitos acadêmicos e do terceiro setor para captação de voluntários e divulgação de causas sociais.

---

## 🌐 Deploy em Produção

O projeto está publicado e acessível globalmente via **Vercel**:
👉 https://site-ong-maos-abertas-dlm8.vercel.app

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

site-ong/<br>
├── html/<br>
│   ├── assets/<br>
│   │   └── imagens/<br>
│   │       └── banner-ong.jpg<br>
│   ├── css/<br>
│   │   └── style.css<br>
│   ├── index.html<br>
│   ├── projetos.html<br>
│   └── cadastro.html<br>
├── js/<br>
│   └── main.js<br>
└── README.md

---

## 💻 Como Executar o Projeto Localmente

1. **Clonar o repositório:**
   git clone https://github.com/giovannamartinsm/site-ong-maos-abertas.git

2. **Acessar o diretório do projeto:**
   cd site-ong-maos-abertas

3. **Executar a aplicação:**
   * Abra a pasta no **Visual Studio Code** (`code .`).
   * Abra o arquivo `html/index.html` no seu navegador ou utilize a extensão **Live Server** do VS Code.

*Por ser uma aplicação SPA desenvolvida exclusivamente com JavaScript Vanilla, não é necessário instalar dependências via `npm` ou executar comandos de build.*

---

## 🔀 Estratégia de Versionamento e GitFlow

* **Adoção do GitFlow:** Uso das branches `main` (produção estável), `develop` (integração contínua) e `feature/*` para desenvolvimento de novas funcionalidades isoladas.
* **Conventional Commits:** Padronização das mensagens de commit através de prefixos semânticos (`feat:`, `fix:`, `docs:`).
* **Releases e Tags:** Criação de tags semânticas (ex: `v1.0.0`) para o registro de versões estáveis.
