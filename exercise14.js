// Logic Challenge - Naik Angkot
// Problem

// Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

// Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

// Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]

function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var keterangan = []
  var ruteA = 0
  var ruteB = 0
  var hasil = 0
  for (var a = 0; a < arrPenumpang.length; a++) {
    angkot ={
      penumpang: arrPenumpang[a][0],
      naikDari: arrPenumpang[a][1],
      tujuan: arrPenumpang[a][2],
      bayar: 0
    }
    for (var i = 0; i < rute.length; i++) {
      for (var j = 0; j < rute.length; j++) {
        if (arrPenumpang[a][1] === rute[i]) {
          ruteA = i* 2000
        }
        if (arrPenumpang[a][2] === rute[i]) {
          ruteB = i * 2000
        }
        
        
      }
       
      angkot.bayar = ruteB - ruteA
    }
    
    keterangan.push(angkot)
    
  }
  console.log(keterangan)

}

//TEST CASE
console.log(naikAngkot([
  ['Dimitri', 'B', 'F'],
  ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]