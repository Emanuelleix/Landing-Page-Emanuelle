const projetos = document.querySelectorAll('.projeto');
const bolinhas = document.querySelectorAll('.bolinha');

let projetoAtual = 0;

function mostrarProjeto(index) {
  projetos.forEach((projeto, i) => {
    projeto.classList.remove('ativo');
    bolinhas[i].classList.remove('ativa');
  });

  projetos[index].classList.add('ativo');
  bolinhas[index].classList.add('ativa');
}

bolinhas.forEach((bolinha, i) => {
  bolinha.addEventListener('click', () => {
    projetoAtual = i;
    mostrarProjeto(projetoAtual);
  });
});

// Mostrar o primeiro ao carregar
mostrarProjeto(projetoAtual);