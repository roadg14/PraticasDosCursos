let N = gets();

for (let i = 0; i < N; i++) {
  let quantidadeClientes = parseInt(gets());
  let sms = gets();
  
  let senhas = sms.split(" ").map(senha => parseInt(senha));
  
  let senhasNaoOrdernadas = [...senhas];
  
  let quantidadeNaoMudou = 0;
    
  senhas.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });
  
  for (let i = 0; i < quantidadeClientes; i++) {
    if(senhas[i] === senhasNaoOrdernadas[i]) quantidadeNaoMudou++; 
  }

  console.log(quantidadeNaoMudou);
}