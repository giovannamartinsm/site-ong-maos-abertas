const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors()); // Permite requisições do front-end
app.use(express.json()); // Permite receber dados em formato JSON

// Simulação de banco de dados em memória
const voluntarios = [];

// Rota de teste (GET)
app.get('/api', (req, res) => {
  res.json({ mensagem: 'API da ONG Mãos Abertas rodando com sucesso!' });
});

// Rota para receber o cadastro do formulário (POST)
app.post('/api/voluntarios', (req, res) => {
  const { nome, email, telefone } = req.body;

  // Validação simples no back-end
  if (!nome || !email) {
    return res.status(400).json({ erro: 'Nome e e-mail são obrigatórios!' });
  }

  const novoVoluntario = {
    id: Date.now(),
    nome,
    email,
    telefone: telefone || 'Não informado',
    dataCadastro: new Date().toISOString()
  };

  voluntarios.push(novoVoluntario);
  console.log('Novo voluntário recebido:', novoVoluntario);

  res.status(201).json({
    mensagem: 'Cadastro realizado com sucesso!',
    voluntario: novoVoluntario
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});