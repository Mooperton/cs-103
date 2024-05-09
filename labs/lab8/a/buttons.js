let first;
let second;

function addition() {
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    document.getElementById("output").innerHTML=Number(first)+Number(second);
    console.log("compiler reached here as well");
}
function subtract(){
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    document.getElementById("output").innerHTML=Number(first)-Number(second);
}
function multiply(){
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    document.getElementById("output").innerHTML=Number(first)*Number(second);
}
function divide(){
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    document.getElementById("output").innerHTML=Number(first)/Number(second);
}