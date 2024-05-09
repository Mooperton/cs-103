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
let today = new Date();

let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
let hours = today.getHours();
let minutes = today.getMinutes();

if (minutes < 10) {
    minutes = '0' + minutes;
}

let ampm;
if (hours >= 12) {
    ampm = 'PM';
} else {
    ampm = 'AM';
}
if (hours > 12) {
    hours = hours - 12;
} else if (hours === 0) {
    hours = 12;
}

let time = hours + ":" + minutes;
let dateTimeString = `${month}/${day}/${year} ${time} ${ampm}`;

document.getElementById("time-date").innerHTML =
    `<h3>${time} ${ampm}</h3>
    <h4>${month}/${day}/${year}</h4>`;