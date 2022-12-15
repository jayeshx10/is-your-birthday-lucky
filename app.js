const birthDate = document.querySelector("#birthdate");
const luckyNo = document.querySelector("#lucky-no");
const btn = document.querySelector(".btn");
const displayMsg = document.querySelector(".display-msg-div");

function calculateSum(date){
    let DOB = birthDate.value;
    DOB = DOB.replaceAll("-", "");

    var sum = 0;
    for(let i=0; i<DOB.length; i++){
        sum = sum + Number(DOB.charAt(i));
    }
    console.log(sum);
    return sum;
}

function compareValues(sum, lucky_no){
    if(sum % lucky_no == 0){
        displayMsg.innerHTML = "Your birthday is lucky 🐱";
    }
    else{
        displayMsg.innerHTML = "Sorry your birthday is not lucky 😿";
    }
}

function isBirthdateLucky(){
    if(birthDate.value != "" && luckyNo.value != ""){
        if(Number(luckyNo.value) < 0){
            displayMsg.innerHTML = "LUCKY NUMBERS CANNOT BE NEGATIVE";
            return;
        }

        const sum = calculateSum(birthDate.value);
        compareValues(sum, luckyNo.value);
    }
    else{
        displayMsg.innerHTML = "Enter both fields";
    }
}


btn.addEventListener('click', isBirthdateLucky);