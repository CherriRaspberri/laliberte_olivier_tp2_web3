import Typed from "typed.js";

let isPlaying = false;

let playText = new Typed("#play-pause", {
    strings: ["RETRO-FUTURIST"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 3000
});

document.getElementById('play-button').addEventListener('click', function() {
    if (!isPlaying) {
        playText.strings = ["NOW PLAYING..."];
        playText.reset(true);
        isPlaying = true
    }
    else {
        playText.strings = ["PAUSED"];
        playText.reset(true);
        isPlaying = false;
    }
});