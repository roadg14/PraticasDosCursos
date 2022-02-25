let lines = gets().split('\n');
let line = lines.shift().split(" ");
let inicio = parseInt(line[0]);
let final = parseInt(line[1]);

if (inicio >= 0 && final <= 2) {
  console.log('nova');
} else if (final > inicio && final <= 96) {
  console.log('crescente');
} else if (inicio >= final && final <= 96) {
  console.log('minguante');
} else { 
  console.log('cheia');
}