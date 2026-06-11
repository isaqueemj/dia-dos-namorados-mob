/* CONFIGURAR AQUI */
const senhaCorreta = "30052026";
const nomeAmor = "Ana Luiza";
let contador = 0;

/* LOGIN */
function entrar() {

    const senha = document.getElementById("senha").value;

    if (senha === senhaCorreta) {
        document.getElementById("login").style.display = "none";
        document.getElementById("site").classList.remove("hidden");

        iniciar();
    } else {
        if (contador < 2) {
            document.getElementById("erro").innerText = "Senha incorreta ❤️";
            contador++;
        } else {
            document.getElementById("erro").innerText =
                "❤️ Dica Extra: Data do nosso namoro (Só os numeros) ❤️";
        }
    }
}

/* INICIAR */
function iniciar() {
    document.getElementById("titulo").innerText =
        "Eu te amo, " + nomeAmor + " ❤️";

    criarFundo(); // ✅ fundo
}

/* FUNDO */
const imagens = Array.from(
    { length: 18},
    (_, i) => `foto${i + 1}.jpg`
);

function criarFundo() {
    const bg = document.querySelector(".bg");
    bg.innerHTML = "";

    const largura = window.innerWidth;

    let total;
    let base;

    if (largura <= 600) {
        base = 8;   // ✅ imagens diferentes
        total = 24; // ✅ quantidade para preencher tela
    } else {
        base = imagens.length;
        total = 40;
    }

    for (let i = 0; i < total; i++) {
        const img = document.createElement("img");

        img.src = imagens[i % base]; // ✅ repete somente as primeiras
        img.loading = "lazy";

        bg.appendChild(img);
    }
}

/* CARTA */
function abrir() {
    document.getElementById("mensagem").innerHTML =
        "<p>Desde que você entrou na minha vida, tudo ficou mais bonito ❤️<br>Eu te amo muito ❤️<br>Você é a melhor parte da minha vida ❤️</p>";
}

/* ATUALIZA FUNDO AUTOMATICAMENTE */
window.addEventListener("load", criarFundo);
window.addEventListener("resize", criarFundo);
