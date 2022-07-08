// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

let jogadorA = "Papel";
let jogadorB = "Papel";
let jogadas = ["Pedra", "Papel", "Tesoura"];

if (jogadorA === jogadorB) {
  console.log(
    "O jogador A jogou:",
    jogadorA,
    "\t O jogador B jogou:",
    jogadorB,
    "\t Resultando em um: Empate"
  );
}
