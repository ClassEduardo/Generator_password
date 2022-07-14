const rand = (min , max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 50));
const simbolos = '!@#$%¨&*()_-=+/^~<>';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraChar(qtd, maiuscula, minuscula, numero, simbolosAleatr){
   const senhaArray = []
   qtd = +qtd;

   for (let i = 0; i < qtd; i++) {
      maiuscula && senhaArray.push(geraMaiuscula())
      minuscula && senhaArray.push(geraMinuscula())
      numero && senhaArray.push(geraNumero())
      simbolosAleatr && senhaArray.push(geraSimbolo())
   }
   return senhaArray.join('').slice(0, qtd)
}


