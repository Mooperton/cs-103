function check(){
    let age = document.getElementById("age").value;
    // console.log("compiler reached here as well");
    if (Number(age)>17){
        // console.log("compiler reached here as well...");
        document.getElementById("apple").style.visibility="visible";
    }
}