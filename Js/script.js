/* SCRIPT JS */

/* CRIANDO POSTS */

const createPosts = (containerPost, nameUser, urlAvatar, urlImage, texto) => {
  const novoPost = document.createElement("div");
  novoPost.classList.add("post-content");

  const headerNovoPost = document.createElement("div");
  headerNovoPost.classList.add("foto-empresa");
  novoPost.appendChild(headerNovoPost);

  const headerImagemNovoPost = document.createElement("img");
  headerImagemNovoPost.src = String(urlAvatar);
  headerImagemNovoPost.alt = "alguma coisa";
  headerNovoPost.appendChild(headerImagemNovoPost);

  const titlePostagem = document.createElement("h3");
  titlePostagem.textContent = nameUser;
  headerNovoPost.appendChild(titlePostagem);

  containerPost.insertBefore(novoPost, containerPost.firstChild);

  if (urlImage) {
    const novoPostImagem = document.createElement("img");
    novoPostImagem.src = String(urlImage);
    novoPostImagem.alt = "imagem seja-bemvindo";
    novoPostImagem.classList.add("bem-vindo");
    novoPost.appendChild(novoPostImagem);
  }

  const paragrafoElemento = document.createElement("p");
  paragrafoElemento.textContent = String(texto);
  novoPost.appendChild(paragrafoElemento);
};

document.addEventListener("DOMContentLoaded", function () {
  const botaoPostagem = document.querySelector(".botão-postagem");
  const textArea = document.querySelector("#postagem textarea");
  const containerPosts = document.querySelector(".post");
  const inputImage = document.getElementById("file-image");
  let urlImagem;

  inputImage.addEventListener("change", function (e) {
    if (e.target.files[0]) {
      console.log("change input");
      const reader = new FileReader();
      reader.onload = function (e) {
        urlImagem = e.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  });

  botaoPostagem.addEventListener("click", function () {
    createPosts(
      containerPosts,
      "Nome do Usuário",
      "../Assets/perfil_image.jpg",
      urlImagem,
      textArea.value
    );
    textArea.value = "";
    inputImage.value = 0;
  });
});

// Obtém todos os botões com a classe "group-entrar"
const groupEntrarButtons = document.querySelectorAll(" .group-entrar");

groupEntrarButtons.forEach((buttom) => {
  buttom.addEventListener("click", () => {
    buttom.classList.toggle("active");
    buttom.textContent = buttom.classList.contains("active")
      ? "Sair"
      : "Entrar";
  });
});

// Obtém todos os botões com a classe "talento-entrar"
const talentoEntrarButtons = document.querySelectorAll(".talento-entrar");

talentoEntrarButtons.forEach((buttom) => {
  buttom.addEventListener("click", () => {
    buttom.classList.toggle("active");
    buttom.textContent = buttom.classList.contains("active")
      ? "Sair"
      : "Entrar";
  });
});

//Bio Editavel

var bio = document.getElementById("p-bio");
var conteudoOriginal = bio.innerText;
var editando = false;
var botao = document.querySelector("button");

function alternarEdicao() {
  if (editando) {
    salvarBio();
    botao.innerText = "Editar";
    botao.style.backgroundColor = "";
  } else {
    editarBio();
    botao.innerText = "Salvar";
    botao.style.backgroundColor = "green";
  }
}

function editarBio() {
  bio.contentEditable = true;
  bio.classList.add("edit-mode");
  editando = true;
}

function salvarBio() {
  bio.contentEditable = false;
  bio.classList.remove("edit-mode");
  conteudoOriginal = bio.innerText;
  editando = false;
}
