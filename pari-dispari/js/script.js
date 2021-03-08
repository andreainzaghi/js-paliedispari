
function random() {
  // genereate a random number minor than 5 and greater than 0
  Math.floor(Math.random() * 5) + 1;
}

do {
  var utente = prompt("inserisci pari o dispari?")
 var  numero = parseInt(prompt("Inserisci un numero"));
} while(isNaN(numero) || numero > 5 || numero <= 0);
numeroComputer = random();

function isEven(numb1, numb2) {
  var checkEven = numb1 + numb2;
  if(( numb1 + numb2 ) % 2 == 0) {
    return 1;
  }
  return 0;
}

var isEvenResult;
var result;
if(isEven(utente, numeroComputer) == 1) {
  isEvenResult = "pari";
}else {
  isEvenResult = "dispari";
}

result = utente.localeCompare(isEvenResult);
if(result == 0) {
  document.write("hai vinto");
} else {
  document.write("hai perso");
}
