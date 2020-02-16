// Logic Challenge - Check AB
// Problem

// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

function checkAB(num) {
    // you can only write your code here!
    // console.log(num)
    var hasil1 =''
    var hasil2 =''
    var ab = 'a'
    var ba = 'b'

    for (var i = 0; i < num.length; i++) {
        if (num[i] === ab) {
            hasil1 = i
            console.log(" ini hasil 1 : " +hasil1)
        } else if (num[i] == ba) {
            hasil2 = i
            console.log(" ini hasil 2 : " +hasil2)
        }
    }
    return hasil1-hasil2 == 4 || hasil2-hasil1 == 4
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false