let first;
let second;
let output;

function addition() {
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    document.getElementById("output").innerHTML=Number(first)+Number(second);
    output = Number(first)+Number(second);
    if (output < 0){
        document.getElementById("output").style.color = "red";
    }
    else if (output>0){
        document.getElementById("output").style.color = "";
    }
    console.log("compiler reached here as well");
}
function subtract(){
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    document.getElementById("output").innerHTML=Number(first)-Number(second);
    output = Number(first)-Number(second);
    if (output < 0){
        document.getElementById("output").style.color = "red";
    }
    else if (output>0){
        document.getElementById("output").style.color = "";
    }
}
function multiply(){
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    document.getElementById("output").innerHTML=Number(first)*Number(second);
    output = Number(first)*Number(second);
    if (output < 0){
        document.getElementById("output").style.color = "red";
    }
    else if (output>0){
        document.getElementById("output").style.color = "";
    }
}
function divide(){
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    document.getElementById("output").innerHTML=Number(first)/Number(second);
    output = Number(first)/Number(second);
    if (output < 0){
        document.getElementById("output").style.color = "red";
    }
    else if (output>0){
        document.getElementById("output").style.color = "";
    }
}
function power(base, exponent){
    first = document.getElementById("input-1").value;
    second = document.getElementById("input-2").value;
    document.getElementById("output").innerHTML = Number(first)**Number(second);
    output = Number(first)**Number(second);
    if (output < 0){
        document.getElementById("output").style.color = "red";
    }
    else if (output>0){
        document.getElementById("output").style.color = "";
    }
    let result = 1;
    for (let i = 0; i < exponent; i++) {
// result *= base;
    }
    return result;
}
function clearInputs() {
    document.getElementById("input-1").value = "";
    document.getElementById("input-2").value = "";
    document.getElementById("output").innerText = "";
}
