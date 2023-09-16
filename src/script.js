const botaoTeleporte = document.getElementById('botaoTeleporte');
let teletransportado = false;

function exibirMensagem() {
  alert('Sabia que você ia escolher essa opção minha princesa S2');
}

var botao = document.getElementById('botaoFixo');

botao.addEventListener('click', exibirMensagem);

botaoTeleporte.addEventListener('mouseover', () => {
  if (!teletransportado) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const randomX = Math.random() * (screenWidth - 100);
    const randomY = Math.random() * (screenHeight - 40);

    botaoTeleporte.style.left = `${randomX}px`;
    botaoTeleporte.style.top = `${randomY}px`;

    teletransportado = true;
  }
});

botaoTeleporte.addEventListener('mouseout', () => {
  teletransportado = false;
});
