

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
 var parola = prompt('Inserisci una parola');



  function checkPalindrom(palindrom)
  {

      for( var i = palindrom.length; i > 0; i-- )
      {
          if( palindrom[i] = palindrom.charAt(palindrom.length)-1 )
          {
              document.write('the word is palindrome.');
          }else{
              document.write('the word is not palindrome!');
          }
      }
  }
  checkPalindrom('wordthatwillbechecked');
