import { produtos } from "./produtos.js"; // pego os produtos do arquivo produtos.js

function listaTabelaProdutos() {
  // função para listar os produtos na tabela
  let tbody = document.getElementById("tbody"); // pega a tabela pelo ID

  for (let i = 0; i < produtos.length; i++) {
    // percorre o array de produtos
    let produtoAtual = produtos[i]; // pega o produto atual do loop

    let tr = tbody.insertRow(); // cria uma nova linha na tabela toda vez que passa pelo loop

    // cria as células e atribui elas a variáveis
    let td_nome = tr.insertCell();
    let td_categoria = tr.insertCell();
    let td_preco = tr.insertCell();
    let td_quantidade = tr.insertCell();
    let td_descricao = tr.insertCell();
    let td_acoes = tr.insertCell();

    // aqui coloca os dados do produtoAtual nas variaveis que estão ligadas as células
    td_nome.innerText = produtoAtual.nome;
    td_categoria.innerText = produtoAtual.categoria;
    td_preco.innerText = produtoAtual.preco.toFixed(2); // formata o preço com 2 casas decimais
    td_quantidade.innerText = produtoAtual.quantidade;
    td_descricao.innerText = produtoAtual.descricao;
    td_acoes.innerHTML = `
  <button class="acoes__botao" onclick="alert('Editar ${produtoAtual.nome}')">Editar</button>
  <button class="acoes__botao" style="background:red" onclick="alert('Excluir ${produtoAtual.nome}')">Excluir</button>
`;
 // adiciona botões de ação no html de cada celula ações
  }
}

listaTabelaProdutos();
