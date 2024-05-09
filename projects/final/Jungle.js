
function boomboclat(){
    //if firat image is showing then switch to second image, audio.play and audio.reset
    const firstImage = document.getElementById("jungleimage");
    const secondImage = document.getElementById("power");
    const audio = document.getElementById("audio");

    if (secondImage.style.display === "none"){
        firstImage.style.display = "none";
        secondImage.style.display = "block";

    }
    else if(firstImage.style.display === "none"){
        secondImage.style.display = "none";
        firstImage.style.display = "block";

    }
    audio.play();
    audio.currentTime = 0;
}

