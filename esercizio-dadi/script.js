/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

let dadiLanciatiDalComputer = Math.floor(Math.random() * 6) + 1;
let dadiLanciatiDalPlayer = Math.floor(Math.random() * 6) + 1;
//Mathfloor arrotonda per difetto
//Math random restituisce un numero casuale compreso tra 0 (incluso) e 1(escluso)
// + 1 perchè math random * 6 arrotonda a numeri da 1 a 5

if (dadiLanciatiDalPlayer > dadiLanciatiDalComputer) {
  console.log("vince il player con" + dadiLanciatiDalPlayer + "contro" + dadiLanciatiDalComputer + "del pc")
} else if (dadiLanciatiDalComputer > dadiLanciatiDalPlayer) {
  console.log("vince il computer con" + dadiLanciatiDalComputer + "contro" + dadiLanciatiDalPlayer + "del giocatore")
}

//if verifica la prima condizione
//else if verifica una seoconda condizione