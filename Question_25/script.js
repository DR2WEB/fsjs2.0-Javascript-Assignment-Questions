const checkWeight = 65;
const checkHeight = 125;

const newHeight = checkHeight * checkHeight; 

function bmiValue(weight, height){
    const bmi = weight / height
    console.log("your bmi is", bmi);

    if(bmi < 18.5){
        console.log("You are underweight");
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        console.log("Your are normal");
    }
    else if(bmi >= 25 && bmi <= 29.9){
        console.log("You are overweight");
    }
    else {
        console.log("You are obese")
    }
}

bmiValue(checkWeight, checkHeight);