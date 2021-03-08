

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
 var parola = prompt('Inserisci una parola');

  var palindrom =[];
  palindrom.push(parola);
  console.log(palindrom);


  // function checkPalindrom(palindrom)
  // {
  //
  //     for( var i = palindrom.length; i > 0; i-- )
  //     {
  //         if( palindrom[i] = palindrom.charAt(palindrom.length)-1 )
  //         {
  //             document.write('the word is palindrome.');
  //         }else{
  //             document.write('the word is not palindrome!');
  //         }
  //     }
  // }
  // checkPalindrom('wordthatwillbechecked');


  function Findpalindrome(palindrom) (
  var PlainStr= palindrom.replace(/(^0-9a-z)/gi, '').toLowerCase().split("");
  for(var i=0; i < (PlainStr.length)/2; i++)(
  if(PlainStr(i) == PlainStr(PlainStr.length-i-1))(
  return true;
  ) else
  return false;
  )
  ) Findpalindrome("ta11at");
