/*Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. Non è necessario provvedere alla validazione delle email
*/

const mail = ["simone@gmail.com", "massimo@gmail.com", "stefano@gmail.com", "filippo@gmail.com", "marco@gmail.com"];
let utenteMail = prompt("inserisci mail")
let message = 'accesso negato'

console.log(utenteMail);

// controllo uno per uno l'email del mio array per ogni elemento se è uguale all'email inserita
//    creo un for per ciclare il mio array e mi stampo con un console log l'email che sto controllando
//      creo la logica per confrontare l'email corrente che sto controllando con l'email inserita dall'utente
for (let i = 0; i < mail.length; i++) {
  if (utenteMail == mail[i]) {
    message = 'accesso eseguito'
  }
}
console.log(message);

//length calcolo lunghezza
// prompt messaggio che richiede all'utente di eseguire un imput
//i indice
//++ incremento
