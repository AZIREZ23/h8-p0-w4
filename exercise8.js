// Logic Challenge - Tukar Besar Kecil
// Problem

// Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. Spasi dan simbol diabaikan.

function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var splitKalimat = kalimat.split('')
    var tampung = []

    for ( var i =0; i < kalimat.length; i++){
      if (splitKalimat[i]===splitKalimat[i].toUpperCase()){
        tampung[i] = splitKalimat[i].toLowerCase()
      }
      if (splitKalimat[i]===splitKalimat[i].toLowerCase()){
        tampung[i] = splitKalimat[i].toUpperCase()
      }
    }
     return tampung.join('')
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"