
let pontosUsuario = 0;
let pontosComputador = 0;
const jogadasDisponiveis = ["Pedra", "Papel", "Tesoura"];


function jogar(jogadaDoUsuario) {

    // 1. saber oque o usuário jogou (X)
    alert(jogadaDoUsuario);

    // 2. fazer o computador ter uma jogada (X)
    const jogadaAleatoria = Math.floor(Math.random() * 3);
    const jogadaDoComputador = jogadasDisponiveis[jogadaAleatoria];

    // 3. saber quem ganhou (X)
    if(jogadaDoComputador === jogadaDoUsuario) {
        alert("EMPATOU");
    } else if (jogadaDoComputador === "Pedra") {
        if (jogadaDoUsuario === "Papel") {
            alert("GANHOU");
            pontosUsuario = pontosUsuario + 1;
        } else {
            alert("PERDEU");
            pontosComputador = pontosComputador + 1;
        }
    } else if (jogadaDoComputador === "Papel") {
        if (jogadaDoUsuario === "Pedra") {
            alert("PERDEU");
            pontosComputador = pontosComputador + 1;
        } else {
            alert("GANHOU");
            pontosUsuario = pontosUsuario + 1;
        }
    } else {
        if (jogadaDoUsuario === "Pedra") {
            alert("GANHOU");
            pontosUsuario = pontosUsuario + 1;
        } else {
            alert("PERDEU");
            pontosComputador = pontosComputador + 1;
        }
    }

    // 4. atualizar as pontuações (X)
    document.querySelector("#pontuacaoUsuario").innerText = pontosUsuario;
    document.querySelector("#pontuacaoComputador").innerText = pontosComputador;

    // 5. verificar a vitória (X)
    if (pontosUsuario === 5) {
        alert("Você venceu com 5 pontos! Parabéns!");
        reiniciarJogo();
    } else if (pontosComputador === 5) {
        alert("O computador venceu com 5 pontos! Tente novamente!");
        reiniciarJogo();
    }
    
}

function reiniciarJogo() {
    pontosUsuario = 0;
    pontosComputador = 0;
    document.querySelector("#pontuacaoUsuario").innerText = pontosUsuario;
    document.querySelector("#pontuacaoComputador").innerText = pontosComputador;
}