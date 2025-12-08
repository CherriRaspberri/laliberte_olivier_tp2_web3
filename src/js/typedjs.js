import Typed from "typed.js";

//Creates animation for text
let playText = new Typed("#play-pause", {
    strings: ["RETRO-FUTURIST"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 3000
});

//Switches from one text to the other when the audio is playing / paused
export function updateTypedText(isPlaying) {
    if (isPlaying) {
        playText.strings = ["NOW PLAYING..."];
        playText.reset(true);
    }
    else {
        playText.strings = ["PAUSED"];
        playText.reset(true);
    }
}