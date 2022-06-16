for (let index = 0; index < document.querySelectorAll(".gift-btn").length; index++) {

    document.querySelectorAll(".gift-btn")[index].addEventListener("click", function () {
            var input = prompt("Input the code");
            answer(input);
    });
}

function answer(input) {
    switch (input) {
        case "17-03-2022":
            window.open('giftjjk.html');
            break;
        case "draw":
            window.open('giftcsp.html');
            break;
        case "kepo":
            window.open('giftcat.html');
            break;
        default:
            alert("Wrong code");
            break;
    }
}

var audio = document.getElementById("bg-audio");
audio.autoplay = true;
audio.volume = 0.15;
audio.loop = true;

function muteAudio () {
    audio.volume = 0;
}

function unmuteAudio () {
    audio.volume = 0.15;
}