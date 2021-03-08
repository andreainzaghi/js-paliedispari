

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt('Inserisci una parola');


var dritta = [];
var rovescio = [];
function palindromo (parola) {

    for (  i = 0; i < parola.length; i++ ) {
        dritta.push(parola[i]);
    }

    for (  y = parola.length; y < 0 ; y-- ) {
        rovescio.push(parola[y]);
    }

    if (rovescio = dritta) {
        return 'true';
    }
}


if ('true') {
    console.log('La parola ' + parola + ' è palindroma.');
} else {
    console.log('La parola ' + parola + ' non è palindroma.');
}
