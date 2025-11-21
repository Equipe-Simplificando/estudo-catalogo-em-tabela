import { produtos as produtosBase } from "./produtos.js";

let produtos = JSON.parse(localStorage.getItem("produtos")) || produtosBase;

const tbody = document.getElementById("tbody");
const campoBusca = document.getElementById("busca-produto");
const campoCategoria = document.getElementById("filtro-categoria");
const botaoBuscar = document.getElementById("btn-buscar");

// -----------------------------
// Preenche a tabela
// -----------------------------
function preencherTabela(lista) {
  tbody.innerHTML = "";

  lista.forEach(produto => {
    let tr = tbody.insertRow();

    tr.insertCell().innerText = produto.nome;
    tr.insertCell().innerText = produto.categoria;
    tr.insertCell().innerText = produto.preco.toFixed(2);
    tr.insertCell().innerText = produto.quantidade;
    tr.insertCell().innerText = produto.descricao;

    let tdAcoes = tr.insertCell();
    tdAcoes.innerHTML = `
      <button class="acoes__botao" onclick="window.location.href='editar.html?id=${produto.id}'">Editar</button>
      <button class="acoes__botao" style="background:red" onclick="alert('Excluir ${produto.nome}')">Excluir</button>
    `;
  });
}

// -----------------------------
// Filtrar produtos
// -----------------------------
function filtrarProdutos() {
  produtos = JSON.parse(localStorage.getItem("produtos")) || produtosBase;

  const texto = campoBusca.value.toLowerCase();
  const categoria = campoCategoria.value;

  const filtrados = produtos.filter(produto => {
    const nomeAtende = produto.nome.toLowerCase().includes(texto) || texto === "";
    const categoriaAtende = produto.categoria === categoria || categoria === "";
    return nomeAtende && categoriaAtende;
  });

  preencherTabela(filtrados);
}

// -----------------------------
botaoBuscar.addEventListener("click", filtrarProdutos);

// -----------------------------
// Atualiza a lista na tela inicial
// -----------------------------
function atualizarLista() {
  produtos = JSON.parse(localStorage.getItem("produtos")) || produtosBase;
  preencherTabela(produtos);
}

atualizarLista();
