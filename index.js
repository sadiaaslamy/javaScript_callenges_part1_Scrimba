let result = document.getElementById("result-home")
let resultGuest = document.getElementById("result-guest")

let num = 0
let num2 = 0
result.innerText = num
resultGuest.innerText = num2

function plus1(){
    num += 1
    result.textContent = num
}

function plus2(){
    num += 2
    result.textContent = num
}

function plus3(){
    num += 3
    result.textContent = num
}
function resetAllHome(){
    num = 0
    result.textContent = num
}

//Guest's result start from here
function plusGuest1(){
    num2 += 1
    resultGuest.textContent = num2
}

function plusGuest2(){
    num2 += 2
    resultGuest.textContent = num2
}

function plusGuest3(){
    num2 += 3
    resultGuest.textContent = num2
}
function resetAllGuest(){
    num2 = 0
    resultGuest.textContent = num2
}
