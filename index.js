/*WHILE, DO WHILE, FOR*/


let index = 1;

console.log("LOOP FROM WHILE");
while (index < 2) { //index = 1 < 1 => FALSE
    console.log("Ini baris ke-" + index);
    index = index + 1;
}

console.log("==================");
console.log("LOOP FROM DO WHILE");
do {
    console.log("saya pasti akan dijalankan at least sekali");
    index++;
} while (index < 2)

console.log("==================");

console.log("LOOP FROM FOR");
for (let index = 1; index <= 5; index++) {
    console.log("Ini baris ke-" + index);
}

/* ARRAY */

let numbers = [ 1, 2, 3, 4 ];
let words = new Array();

// numbers[0] = 16;
// numbers[1] = 98;

numbers.push(16, 98, 53);
// numbers.push(98);
// numbers.push(53);

console.log(numbers);
console.log(words);

let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//     total = total + numbers[i]
//     // console.log(numbers[i]);
// }

numbers.map(num => { //[ 2, 5, 6 ]
    console.log("NUM: " + num);
    total = total + num;
})

console.log(total);

numbers.shift()
console.log(numbers);

numbers.unshift(666);
console.log(numbers);

// UNTUK MENGECEK ANGKA APAKAH GANJIL ATAU GENAP
// MODULUS => HASIL SISA BAGI
console.log("---------> MODULUS ");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i] + " adalah bilangan genap");
    } else {
        console.log(numbers[i] + " adalah bilangan ganjil");
    }
}

let data = [ 45, 23, 90, 64, 29, 81 ];

// 45
// 23
// 29
// 81


/* ARRAY MULTI DIMENSIONAL */

let array = [ [ 1, 2, 3 ], [ 9, 8, 7, 15, 41 ], [ 43, 10, 7 ] ]

// let dataPertama = array[0];
// console.log(dataPertama); // [ 1, 2, 3 ] => ada di index ke-1
// console.log(dataPertama[0]);
// console.log(dataPertama[1]);
// console.log(dataPertama[2]);

// console.log(array[1]);
// console.log(array[1][0]);
// console.log(array[1][1]);
// console.log(array[1][2]);
// console.log(array[1][3]);
// console.log(array[1][3][0]);

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);

//     for (let j = 0; j < array[i].length; j++) {
//         console.log(array[i][j]);
//     }
// }

/* PROBLEMS */
let students = [ 'Calvin', 'Michele', 'Rais', 'Icha', 'Rhaya', 'Rafi' ];
let numOfGroups = 2;

let result = []; // [ ['Calvin', 'Michele' ] ]
let group = [];

for (let i = 0; i < students.length; i++) { //i = 3 => students[3] => Icha
    // group => ['Icha'] => 0

    if (group.length < numOfGroups) { // 0 < 2
        group.push(students[i]); 
    }  
    
    if (group.length === numOfGroups || i === students.length-1) {
        result.push(group);
        group = [];
    }
}

console.log(result);


// [ [ 'Calvin', 'Michele' ], [ 'Rais', 'Icha ], [ 'Rhaya' ] ]

// masukkan ke dalam group kalo sudah dimasukkan cek apakah sudah maksimum