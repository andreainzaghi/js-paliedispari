

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma





function palindromo (parola) {


    var rovescio = "";
    for ( var x = parola.length - 1 ; x >= 0 ; x-- ) {
        rovescio += parola[x];
    }

    return rovescio;
}


var parola = prompt('Inserisci una parola');

var rovescio= palindromo (parola);
if (rovescio === parola) {
    console.log('La parola ' + parola + ' è palindroma.');
} else {
    console.log('La parola ' + parola + ' non è palindroma.');
}




// ............................................................................
//
// function capovolgiParola(parola){
//   return stringa;
// }
//
// var parola= capovolgiParola("classe 27")
// console.log(parola);
