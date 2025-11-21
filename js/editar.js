import { produtos } from "./produtos.js";

// ---------------------------
// Carregar produto pelo ID
// ---------------------------
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

let lista = JSON.parse(localStorage.getItem("produtos")) || produtos;
let produto = lista.find(p => p.id === id);

if (!produto) {
  alert("Produto não encontrado!");
  window.location.href = "index.html";
}

// preencher campos
document.getElementById("nome").value = produto.nome;
document.getElementById("categoria").value = produto.categoria;
document.getElementById("preco").value = produto.preco;
document.getElementById("quantidade").value = produto.quantidade;
document.getElementById("descricao").value = produto.descricao;

// ---------------------------
// Salvar alterações
// ---------------------------
document.getElementById("form-editar").addEventListener("submit", (e) => {
  e.preventDefault();

  produto.nome = document.getElementById("nome").value;
  produto.categoria = document.getElementById("categoria").value;
  produto.preco = parseFloat(document.getElementById("preco").value);
  produto.quantidade = parseInt(document.getElementById("quantidade").value);
  produto.descricao = document.getElementById("descricao").value;

  // salvar no localStorage
  localStorage.setItem("produtos", JSON.stringify(lista));

  alert("Produto salvo com sucesso!");
  window.location.href = "index.html";
});
