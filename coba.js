var hewan = [['ayam', 'bebek'],['kelinci'],['sapi'],['kucing']]

// coba akses y dari ayam
// coba akses l dari kelinci

console.log(hewan[0][0][1])
console.log(hewan[1][2])
console.log(hewan[0][1][2])
console.log('//////////////////////////////////////////////////////////////////////////////')

function countProfit(shoppers){

for ( var person in shoppers){
    /*console.log(masuk.amount)*/ // masih salah
    /* console.log(person.amount) */  // masih salah
    /*console.log(person[amount]) */ // sintax error
    console.log(shoppers[person].amount)  // alhamdulillah akhirnya keakses
}
var listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
];
for ( var i = 0 ; i < listBarang.length; i++){
console.log(listBarang[i][2])
}
}


console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 8
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 10
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 1
}, {
    name: 'Devi',
    product: 'Baju Zoro',
    amount: 1
}, {
    name: 'Lisa',
    product: 'Baju Zoro',
    amount: 1
}]))
