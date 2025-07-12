// Importa o framework Express e o cors
import express, { Request, Response } from 'express';
import cors from 'cors';

// Inicializa a aplicação Express
const app = express();

// Aplica o middleware do cors - permite que o nosso front-end aceda a esta API
app.use(cors());

// Define a porta em que o servidor vai rodar
const port = 3001;

// --- Nossos Dados da Loja ---

// 1. Definimos um tipo (interface) para o objeto Produto
interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string; // Iremos adicionar as URLs das imagens mais tarde
}

// 2. Criamos uma lista de produtos (mock de dados)
const produtos: Produto[] = [
  {
    id: 1,
    nome: 'Camiseta Conforto',
    descricao: 'Multicores e tamanhos. Tecido de algodão 100% fresquinho para o verão.',
    preco: 70.00,
    imagem: 'caminho/para/imagem1.png',
  },
  {
    id: 2,
    nome: 'Calça Alfaiataria',
    descricao: 'Modelo Wide Leg alfaiataria em linho. Uma peça para vida toda!',
    preco: 180.00,
    imagem: 'caminho/para/imagem2.png',
  },
  {
    id: 3,
    nome: 'Tênis Chunky',
    descricao: 'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.',
    preco: 250.00,
    imagem: 'caminho/para/imagem3.png',
  },
  {
    id: 4,
    nome: 'Jaqueta Jeans',
    descricao: 'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!',
    preco: 150.00,
    imagem: 'caminho/para/imagem4.png',
  },
  {
    id: 5,
    nome: 'Óculos Redondo',
    descricao: 'Armação metálica em grafite com lentes arredondadas. Sem erro!',
    preco: 120.00,
    imagem: 'caminho/para/imagem5.png',
  },
  {
    id: 6,
    nome: 'Bolsa Coringa',
    descricao: 'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!',
    preco: 120.00,
    imagem: 'caminho/para/imagem6.png',
  },
];

// --- Nossas Rotas da API ---

// Rota principal
app.get('/', (req: Request, res: Response) => {
  res.send('API da Loja Meteora está no ar!');
});

// Rota para obter todos os produtos
app.get('/api/produtos', (req: Request, res: Response) => {
  // 3. Enviamos a lista de produtos como uma resposta JSON
  res.json(produtos);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});