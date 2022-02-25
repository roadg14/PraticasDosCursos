let totalItems = gets();

for (var i = 0; i < totalItems; i++) {
    let itens = gets();
    let itensOrdenados = itens.split(" ").sort();
    let itensUnicos = itensOrdenados.filter(removeDuplicado);

    function removeDuplicado(elem,index,array){
        return array.indexOf(elem) === index;
    }

    let resposta = [...itensUnicos].join(" ");
    
    console.log(resposta);
}