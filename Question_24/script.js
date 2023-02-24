const evenArr = [];
const oddArr = [];

for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        evenArr.push(i);
    }
    else{
        oddArr.push(i);
    }

}

console.log("Even number array", evenArr);
console.log("Odd number array", oddArr);