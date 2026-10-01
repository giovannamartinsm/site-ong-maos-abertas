/**
 * SPA Router, Máscaras, Validação e Persistência
 * Aplicação: ONG Mãos Abertas
 */

const routes = {
  // Rota Principal (#/)
  "#/" : `
    <section id="sobre">
        <h2>Sobre a Nossa ONG</h2>
        <img src="../assets/imagens/banner-ong.jpg" alt="Voluntários da ONG sorrindo e organizando doações de alimentos">
        <p>Nossa missão é transformar vidas através da solidariedade e da ação comunitária, oferecendo suporte a quem mais precisa.</p>
    </section>

    <section id="feedback-demo">
        <h2>Componentes de Feedback Visual</h2>
        
        <div style="margin-bottom: var(--spacing-md);">
            <span class="badge badge-success">Ação Concluída</span>
            <span class="badge badge-warning">Em Análise</span>
            <span class="badge badge-danger">Urgente</span>
        </div>

        <div class="alert alert-success">
            <strong>Sucesso!</strong> Sua inscrição para voluntariado foi registrada com sucesso.
        </div>
        <div class="alert alert-info">
            <strong>Informativo:</strong> Próximo mutirão de arrecadação agendado para o próximo sábado.
        </div>

        <div class="toast">
            <span>Notificação: Novas vagas abertas para a oficina de educação!</span>
        </div>
    </section>

    <section id="contato">
        <h2>Entre em Contato</h2>
        <p>Fale conosco para tirar dúvidas, fazer doações ou se tornar um voluntário:</p>
        <ul>
            <li><strong>E-mail:</strong> contato@nossaong.org.br</li>
            <li><strong>Telefone:</strong> (11) 99999-8888</li>
            <li><strong>Endereço:</strong> Rua da Solidariedade, 123 - São Paulo/SP</li>
        </ul>
    </section>
  `,

  // Rota de Projetos (#/projetos)
  "#/projetos": `
    <section id="iniciativas">
        <h2>Nossos Projetos Sociais</h2>

        <article>
            <h3>Projeto Prato Cheio</h3>
            <p>Distribuição semanal de marmitas e cestas básicas para famílias em situação de vulnerabilidade extrema.</p>
        </article>

        <article>
            <h3>Projeto Futuro na Escola</h3>
            <p>Aulas de reforço escolar, informática e atividades culturais para crianças da comunidade.</p>
        </article>
    </section>

    <section id="doacoes">
        <h2>Como Fazer uma Doação</h2>
        <p>Sua contribuição financeira garante a continuidade de nossas atividades:</p>
        <ul>
            <li><strong>PIX (Chave CNPJ):</strong> 12.345.678/0001-90</li>
            <li><strong>Transferência Bancária:</strong> Banco 001 | Agência 1234-5 | C/C 98765-4</li>
            <li><strong>Doação de Mantimentos:</strong> Entregas na sede de segunda a sexta, das 8h ás 17h</li>
        </ul>
    </section>

    <section id="voluntariado">
        <h2>Trabalho Voluntário</h2>
        <p>Você pode doar seu tempo e talento nas seguintes frentes:</p>
        <ul>
            <li>Apoio logístico na triagem de doações.</li>
            <li>Instrutores para oficinas infantis e reforço escolar.</li>
            <li>Profissionais de saúde e apoio comunitário.</li>
        </ul>
    </section>
  `,

  // Rota de Cadastro (#/cadastro)
  "#/cadastro": `
    <section>
        <h2>Cadastro de Novo Voluntário</h2>
        <p>Preencha os dados abaixo para se juntar à nossa rede de apoio.</p>

        <div id="mensagem-feedback"></div>

        <form id="form-cadastro" novalidate>
            <fieldset>
                <legend>Dados Pessoais</legend>

                <label for="nome">Nome Completo:</label>
                <input type="text" id="nome" name="nome" required placeholder="Digite seu nome completo">
                <span class="erro-campo" id="erro-nome"></span>
                <br><br>

                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" required placeholder="000.000.000-00">
                <span class="erro-campo" id="erro-cpf"></span>
                <br><br>

                <label for="nascimento">Data de Nascimento:</label>
                <input type="date" id="nascimento" name="nascimento" required>
                <span class="erro-campo" id="erro-nascimento"></span>
            </fieldset>

            <br>

            <fieldset>
                <legend>Contato e Endereço</legend>

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required placeholder="seuemail@exemplo.com">
                <span class="erro-campo" id="erro-email"></span>
                <br><br>

                <label for="telefone">Telefone / WhatsApp:</label>
                <input type="tel" id="telefone" name="telefone" required placeholder="(11) 99999-9999">
                <span class="erro-campo" id="erro-telefone"></span>
                <br><br>

                <label for="cep">CEP:</label>
                <input type="text" id="cep" name="cep" required placeholder="00000-000">
                <span class="erro-campo" id="erro-cep"></span>
            </fieldset>

            <br>
            <button type="submit" class="btn">Enviar Cadastro</button>
        </form>
    </section>
  `
};

/**
 * Renderizador da SPA baseado no fragmento Hash da URL
 */
function render() {
  const path = window.location.hash || "#/";
  const container = document.getElementById("app");
  
  if (container) {
    container.innerHTML = routes[path] || "<h2>Página Não Encontrada</h2>";
    
    if (path === "#/cadastro") {
      initFormValidation();
    }
  }
}

/**
 * Aplica máscaras dinâmicas de formatação automática enquanto o usuário digita
 */
function aplicarMascaras() {
  const cpfInput = document.getElementById("cpf");
  const telInput = document.getElementById("telefone");
  const cepInput = document.getElementById("cep");

  if (cpfInput) {
    cpfInput.addEventListener("input", (e) => {
      let v = e.target.value.replace(/\D/g, "");
      v = v.replace(/(\d{3})(\d)/, "$1.$2");
      v = v.replace(/(\d{3})(\d)/, "$1.$2");
      v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      e.target.value = v.slice(0, 14);
    });
  }

  if (telInput) {
    telInput.addEventListener("input", (e) => {
      let v = e.target.value.replace(/\D/g, "");
      v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
      v = v.replace(/(\d{5})(\d)/, "$1-$2");
      e.target.value = v.slice(0, 15);
    });
  }

  if (cepInput) {
    cepInput.addEventListener("input", (e) => {
      let v = e.target.value.replace(/\D/g, "");
      v = v.replace(/^(\d{5})(\d)/, "$1-$2");
      e.target.value = v.slice(0, 9);
    });
  }
}

/**
 * Rotinas de validação, tratamento de eventos e persistência do formulário
 */
function initFormValidation() {
  const form = document.getElementById("form-cadastro");
  if (!form) return;

  // Ativa as máscaras automáticas nos campos
  aplicarMascaras();

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Padrões de validação e mensagens por campo
    const camposParaValidar = [
      { 
        id: "nome", 
        regex: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,}$/, 
        msgErro: "Por favor, preencha o nome completo." 
      },
      { 
        id: "cpf", 
        regex: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 
        msgErro: "CPF inválido. Use o formato: 000.000.000-00" 
      },
      { 
        id: "nascimento", 
        regex: /^\d{4}-\d{2}-\d{2}$/, 
        msgErro: "Selecione uma data de nascimento válida." 
      },
      { 
        id: "email", 
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
        msgErro: "E-mail inválido. Exemplo: usuario@email.com" 
      },
      { 
        id: "telefone", 
        regex: /^\(\d{2}\)\s?\d{4,5}-\d{4}$/, 
        msgErro: "Telefone inválido. Use o formato: (11) 99999-9999" 
      },
      { 
        id: "cep", 
        regex: /^\d{5}-\d{3}$/, 
        msgErro: "CEP inválido. Use o formato: 00000-000" 
      }
    ];

    let formValido = true;

    // Processa a validação individual de cada campo
    camposParaValidar.forEach(({ id, regex, msgErro }) => {
      const campo = document.getElementById(id);
      const elementoErro = document.getElementById(`erro-${id}`);
      if (!campo) return;

      const eValido = regex.test(campo.value.trim());

      if (!eValido) {
        formValido = false;
        campo.classList.add("campo-invalido");
        campo.classList.remove("campo-valido");

        if (elementoErro) {
          elementoErro.textContent = msgErro;
        }
      } else {
        campo.classList.remove("campo-invalido");
        campo.classList.add("campo-valido");

        if (elementoErro) {
          elementoErro.textContent = "";
        }
      }
    });

    const feedback = document.getElementById("mensagem-feedback");

    // SE HOUVER ERRO: Exibe alerta vermelho e paralisa o envio
    if (!formValido) {
      if (feedback) {
        feedback.innerHTML = `
          <div class="alert alert-danger">
            <strong>Atenção!</strong> O formulário contém dados incorretos ou não preenchidos. Verifique os campos destacados em vermelho.
          </div>
        `;
      }
      return;
    }

    // SE TUDO ESTIVER CORRETO:
    // 1. Pega os cadastros antigos salvos ou cria uma lista vazia
    const voluntariosExistentes = JSON.parse(localStorage.getItem("voluntariosCadastrados")) || [];

    // 2. Cria o novo objeto com os dados digitados
    const novoVoluntario = {
      nome: document.getElementById("nome").value.trim(),
      cpf: document.getElementById("cpf").value.trim(),
      nascimento: document.getElementById("nascimento").value,
      email: document.getElementById("email").value.trim(),
      telefone: document.getElementById("telefone").value.trim(),
      cep: document.getElementById("cep").value.trim()
    };

    // 3. Adiciona o novo voluntário ao final do Array
    voluntariosExistentes.push(novoVoluntario);

    // 4. Salva o Array completo de volta no localStorage
    localStorage.setItem("voluntariosCadastrados", JSON.stringify(voluntariosExistentes));

    if (feedback) {
      feedback.innerHTML = `
        <div class="alert alert-success">
          <strong>Sucesso!</strong> Cadastro realizado e salvo com sucesso no navegador!
        </div>
      `;
    }

    // Limpa os campos do formulário e remove as cores das bordas
    form.reset();
    camposParaValidar.forEach(({ id }) => {
      const campo = document.getElementById(id);
      if (campo) {
        campo.classList.remove("campo-valido", "campo-invalido");
      }
    });
  });
}

// Eventos do ciclo de vida da página para acionamento do roteador
window.addEventListener("hashchange", render);
window.addEventListener("load", render);