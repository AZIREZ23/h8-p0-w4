// tampunglah saya di dalam object

var akuObjectKosong = {

}

var isilah = akuObjectKosong // {} 

/* isilah.push( money : 1); // error syntax */ //percobaan pertama gagal

/*   akuObjectKosong = money : 1 // sama syntax error */
// percobaan kedua gagal

/*  isilah.push('ini aku') */ // sintax error
/*  isilah.join(" aku ")  */ // sintax error

/* var tampung =[ ayam : 1, bebek :1, sapi :2 ] */ // syntax error lagi

/* var bismillahIsi = [ 'ayam : 1'  , 'bebek : 1', 'sapi : 2']
isilah.push(bismillahIsi) */ // masih syntax error

akuObjectKosong['nama'] = 'abdul' // kamu berhasil
/* akuObjectKosong['ayam'] =1
akuObjectKosong['bebek'] =1         // alhamdulillah akhirnya bisa
akuObjectKosong['sapi'] =2 */

/* var masukanBanyak = [['sapi' : 1], ['ayam' : 1], ['bebek' : 1]] */ // sintax error

/* akuObjectKosong.nama : 'aziz'
akuObjectKosong.ayam : 1            // masih salah tapi gak ada cara
akuObjectKosong.bebek : 1           // atau method lain untuk mengepus object
akuObjectKosong.sapi : 1 */

/* akuObjectKosong.push(nama : 'aziz', ayam : 1) */ // syntax error
/* akuObjectKosong.push('aku harus belajar berdiri')*/ // error sintax
var satu = 1
var tampung = []
/* tampung.push(nama : 'aziz', ayam : 1)*/ //eror sintax   
tampung.push('nama : aziz', 'ayam : 1')
tampung.push('alhamdulillah', 'aku bersyukur')
tampung.push(satu)
console.log(tampung)
console.log(akuObjectKosong)
console.log(isilah)

console.log('////////////////////////////////////////////////////////////////////////////////////////')

///////////////////////////////////////////////////////////////////////////////////////////////////
// susunlah aku seperti ini
/* listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
]; */

var listBarang = [] // silahkan dicoba

listBarang.push(['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1])

console.log('listBarang = ', listBarang) // alhamdulillah bisa
console.log('listBarang : ' + listBarang) // listBarang : Sepatu Stacattu,1500000,10,Baju Zoro,500000,2,Sweater Uniklooh,175000,1
console.log('////////////////////////////////////////////////////////////////////////////////////////')
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*  shop = { product: 'Sepatu Stacattu',
             shoppers:'Windi',
             leftOver: 2,
             totalProfit: 12000000
            } */

var shop = {}
shop.product = 'Sepatu Stacattu'
shop.shoppers = 'Windi'
shop.leftOver = 2
shop.totalProfit = 12000000


/*  console.log ( " shop = " + shop) */ // cara penulisan connsole.lognya == salah
/*  console.log ( " shop = " + '\n'+ shop)  */ // cara penulisan connsole.lognya == salah
console.log(" shop = ") // bisanya seperti ini
/*console.log(shop.leftOver.push('jangan takut mencoba')) */ // sintax error
console.log(shop)

console.log('////////////////////////////////////////////////////////////////////////////////////////')
console.log('***************************************************************************************')
// coba akses satu -satu

listHewan = [
    ['Ayam', 'angsa', 'bebek'],
    ['sapi', 'embek', 'domba'],
    ['Semut', 'belalang', 'ulat']
]
//coba akses 'ayam', sapi dan semut

/*console.log(listHewan[0][0])         // alhamdulillah ini benar lagi
console.log(listHewan[1][0])
console.log(listHewan[2][0]) */

// akses dengan 1 console.log
for (var i = 0; i < listHewan.length; i++) {
    //  console.log(listHewan[i][0])      // syntax error maaf ini benar cuma ada kesalahan di fornya tadi, hehehehe
    // coba buat ayam, embek dan ulat   
    console.log(listHewan[0][i] + listHewan[i + 1]) // hampir benar
    console.log('-------------')

    //  console.log(listHewan[i][0])         
    //  console.log(listHewan[i][1])  // hampir benar
    //  console.log('-------------')
    console.log(listHewan[i][i])
}

console.log('////////////////////////////////////////////////////////////////////////////////////////')

console.log('***************************************************************************************')

listAngka = [
    [1, 2, 3],
    [2, 4, 6],
    [6, 8, 10]
]

    console.log(listAngka[0][1] + listAngka[[1][1]]) // hasilnya NaN

    console.log(listAngka[0][1]) //  2
    console.log(typeof(listAngka[0][1])) // type 0f ======>  number
     var hitung = 0 
/*     hitung += toString(listAngka[0][1]) */ // hasilnya  0[object Undefined]
    //  toString(listAngka[0][1]) + toString(listAngka[1][1])
    hitung += listAngka[0][1] // 2
    hitung = listAngka[0][1] + listAngka[1][1] // 6
    
console.log(hitung)

var tambah = listAngka[0][1] + listAngka[1][1] // 6
console.log(tambah)
var ambil =[]
 ambil.push(listAngka[0][1] + listAngka[1][1]) // [ 6 ]
 ambil.push(listAngka[0][1] , listAngka[1][1]) // [ 6, 2 ,4]
 ambil.push('ayam')
console.log(ambil)

console.log('////////////////////////////////////////////////////////////////////////////////////////')

console.log('***************************************************************************************')

// coba upgrade isi array
var upgrade = {
    1 : 1
}

/* if ( upgrade[1]== 0){        // { '1': 1 }
    1 + 1
} 
if ( upgrade['1']== 0){        // { '1': 1 }
    1 + 1
}
 if ( upgrade['1']== 0){        // { '1': 1 }
    '1' + 1
} 
if ( upgrade['1']== null){        // { '1': 1 }
    '1' + 1
} 
if ( upgrade['1']== undefined){        // { '1': 1 }
    '1' + 1
} */

// ayo diusahakan lagi anda masih salah disaat usah keras terakhir anda akan dibantu

upgrade[1] = +1 // masih salah
upgrade['1'] = +1 // masih salah

/* if ( upgrade[1] == 0){        // astagfirullah kamu mencontek coba diusahakan sendiri
    upgrade[1] = 1
}else{
    upgrade[1] += 1
} */

if ( upgrade[1]== 1){       // astagfirullah ternyata saya kurang teliti
    upgrade[1] += 1
}

if ( upgrade[10]== null){
  //  upgrade[10] += 1        //  '10': NaN 
  upgrade[10] = 1
}
if ( upgrade[10]== 1){
    upgrade[10] += 5
}
 /* if ( upgrade[10] <= 10){       //  '10': 7 =====> ini salah saya mengharapkan upgrade 10 = 10 tapi bukan cara manual input
     upgrade[10] ++
 } */
 for ( var i in upgrade){
    if ( upgrade[10] <= 10){       //  '10': 8 =====> ini juga masih salah upgrade seharusnya 10 = 10 
    upgrade[10] += 1 
} upgrade[10] ++                    // alhamdulillah akhirnya bisa juga
 }
console.log(upgrade)

var tambah = ['ayam' , 'bebek']
var sumbang = ['ayam' , 'bebek', 'angsa']

// if (tambah )

var tambah = {
    uang : 0
}
/* console.log(tambah['uang'].push('100')) */
console.log(" numpang...............................")
console.log(" lewat.................................")

var highestScore =[{
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
},
{
    name: 'Alexei',
    score: 85,
    class: 'wolves'
},
{
    name: 'Sergei',
    score: 74,
    class: 'foxes'
},
{
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
}
]