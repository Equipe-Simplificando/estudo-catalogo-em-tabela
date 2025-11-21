import { produtos } from "./produtos.js";

const tbody = document.getElementById("tbody");
const campoBusca = document.getElementById("busca-produto");
const campoCategoria = document.getElementById("filtro-categoria");
const botaoBuscar = document.getElementById("btn-buscar");

// -----------------------------
// Função para preencher tabela
// -----------------------------
function preencherTabela(lista) {
  tbody.innerHTML = ""; // limpa a tabela

  lista.forEach((produto) => {
    let tr = tbody.insertRow();

    tr.insertCell().innerText = produto.nome;
    tr.insertCell().innerText = produto.categoria;
    tr.insertCell().innerText = produto.preco.toFixed(2);
    tr.insertCell().innerText = produto.quantidade;
    tr.insertCell().innerText = produto.descricao;

    let tdAcoes = tr.insertCell();
    tdAcoes.innerHTML = `
      <button class="acoes__botao" onclick="alert('Editar ${produto.nome}')">Editar</button>
      <button class="acoes__botao" style="background:red" onclick="alert('Excluir ${produto.nome}')">Excluir</button>
    `;
  });
}

// -----------------------------
// Função de busca (acionada pelo botão)
// -----------------------------
function filtrarProdutos() {
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
// Evento do botão Buscar
// -----------------------------
botaoBuscar.addEventListener("click", filtrarProdutos);

// -----------------------------
// Carrega todos os produtos ao iniciar
// -----------------------------
preencherTabela(produtos);
