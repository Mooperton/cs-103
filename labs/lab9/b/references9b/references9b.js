function check() {
    let age = document.getElementById("age").value;
    // let output = document.getElementById("output").value
    // console.log("compiler reached here as well");
    if (isNaN(Number(age))){
        // console.log("compiler reached here as well...");
        // console.log("aaa")
        document.getElementById("output").style.display = "block";
        document.getElementById("output").innerHTML = "Letters are banned silly";

    }
    else if (Number(age) >= 18 && Number(age) <= 126) {
        // console.log("compiler reached here as well...");
        document.getElementById("apple").style.visibility = "visible";

    } else if (Number(age) < 0) {
        // console.log("compiler reached here as well...");
        document.getElementById("output").style.display = "block";
        document.getElementById("output").innerHTML = "This is a negative number bruh";
    }
    else if (Number(age)%1 !==0){
        // console.log("compiler reached here as well...");
        document.getElementById("output").style.display = "block";
        document.getElementById("output").innerHTML = "You inputed a decimal...";}
    else{
        document.getElementById("output").style.display = "block";
        document.getElementById("output").innerHTML = "You may not see the content!!!";
        document.getElementById("age").value=" ";
    }
}