let totalItems = gets();
let items = [];

for (let i = 0; i < totalItems; i++) {
  items.push(parseInt(gets()));
}

let pares = items.filter(valor => ~valor & 1).sort((a, b) => a - b);
let impares = items.filter(valor => valor & 1).sort((a, b) => b - a);

pares.map(valor => console.log(valor));
impares.map(valor => console.log(valor));