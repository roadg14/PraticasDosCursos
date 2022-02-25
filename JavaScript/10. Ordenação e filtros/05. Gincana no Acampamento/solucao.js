while (true) {
    let N = gets();
    
    if (N === "0") break;
  
    let circulo = [];
    
    for (let i = 0; i < parseInt(N); i++) {
      const [nome, ficha] = gets().split(" ");
      circulo.push([nome, ficha]);
    }
    
    function buscarPosicaoAtual(ficha, posicaoAtual, totalAlunos) {
        const fichaEhPar = ficha % 2 === 0;
      const contaNoSentidoAntiHorario = () => posicaoAtual --;
      const contaNoSentidoHorario = () => posicaoAtual ++;
    
      if (fichaEhPar) {
        contaNoSentidoAntiHorario();
      } else {
        contaNoSentidoHorario();
      }
      
      const chegouNoUltimo = posicaoAtual > totalAlunos - 1;
      const chegouNoPrimeiro = posicaoAtual < 0;
      
      const voltarProInicio = () => posicaoAtual = 0;
      const voltarProFim = () => posicaoAtual = totalAlunos - 1;
    
      if (chegouNoUltimo) {
        voltarProInicio();
      }
    
      if (chegouNoPrimeiro) {
        voltarProFim();
      }
      
      return posicaoAtual;
    }
    
    function realizarContagem (ficha, posicaoAtual, totalAlunos) {
      for (let i = 0; i < ficha - 1; i++) {
          posicaoAtual = buscarPosicaoAtual(ficha, posicaoAtual, totalAlunos)
      }
      
      return posicaoAtual;
    }
    
    let posicaoAtual = 0;
    
    let ficha = circulo[posicaoAtual][1];
    
    let totalAlunos = circulo.length;
    
    posicaoAtual = buscarPosicaoAtual(ficha, posicaoAtual, totalAlunos);
    
    let [alunoRemovido] = circulo[posicaoAtual];
    
    while (totalAlunos > 1) {
      posicaoAtual = realizarContagem(ficha, posicaoAtual, totalAlunos);
    
      alunoRemovido = circulo[posicaoAtual][0];
      
      ficha = circulo[posicaoAtual][1];
      
      let posicaoIniciaContagem = buscarPosicaoAtual(ficha, posicaoAtual, totalAlunos)
      
      let [alunoIniciaContagem] = circulo[posicaoIniciaContagem];
    
         circulo = circulo.filter(([aluno]) => aluno !== alunoRemovido);
      
      totalAlunos = circulo.length;
    
         posicaoAtual = circulo.map(([aluno]) => aluno).indexOf(alunoIniciaContagem)
    }
    
    const [[vencedor]] = circulo;
    
    console.log(`Vencedor(a): ${vencedor}`);
  }