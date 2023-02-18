// - 4 > 3 --       TRUE
//     - 4 >= 3     TRUE
//     - 4 < 3      False
//     - 4 <= 3     False
//     - 4 == 4     TRUE
//     - 4 === 4    TRUE
//     - 4 != 4     False
//     - 4 !== 4    False
//     - 4 != '4'   True
//     - 4 == '4'   True
//     - 4 === '4'  False


let a = 4;
let b = 3;
let c = '4';

let result1 = a > b;
let result2 = a >= b;
let result3 = a < b;
let result4 = a <= b;
let result5 = a == b;
let result6 = a === b;
let result7 = a != b;
let result8 = a !== b;
let result9 = a != c;
let result10 = a == c;
let result11 = a === c;

let str1 = 'python'
let str2 = 'jargon'
let compare = str1 == str2;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
console.log(result8);
console.log(result9);
console.log(result10);
console.log(result11);

console.log(str1.length);
console.log(str2.length);
console.log(compare);