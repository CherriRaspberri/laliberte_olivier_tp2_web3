//Olivier Laliberté - 2025
import { animate } from "animejs";
import { initPlayer, playAudio, pauseAudio, onAudioStop } from "./tonejs.js";
import { updateTypedText } from "./typedjs.js";

//Speaker variables
let wooferAnim = null;
let isPlaying = false;

//Music tracker variables
const TRACK_DURATION = 19.8; //in seconds
let progressAnim = animate(".tracker-progress", {
  width: ["0%", "100%"],
  duration: TRACK_DURATION * 1000,
  autoplay: false,
});

//Bootstrap icons variables
let playIcon = document.getElementById("play-icon");

//Initializes audio
const audioPath = new URL("../../assets/audio/music.mp3", import.meta.url).href;
initPlayer(audioPath);

//Stops animations when audio ends (naturally or paused)
onAudioStop(() => {
  //Switches icons
  playIcon.classList.remove("bi-play-fill");
  playIcon.classList.add("bi-pause-fill");

  //Updates typdjs text
  updateTypedText(false);

  //If wooferAnim exists, stop it
  if (wooferAnim) {
    wooferAnim.pause();
    wooferAnim = null;
    document.querySelector(".speaker-big").style.transform = "scale(1)";
  }

  //Resets amp knobs
  animate(".amp-knob", {
    rotate: 0,
  });

  //Resets progress bar
  if (progressAnim) {
    progressAnim.pause();
    progressAnim.seek(0);
  }

  //Switch
  isPlaying = false;
});

//Onclick event
document
  .getElementById("play-button")
  .addEventListener("click", async function () {
    //If not playing, start animations
    if (!isPlaying) {
      //Switches icons
      playIcon.classList.remove("bi-pause-fill");
      playIcon.classList.add("bi-play-fill");

      //Updates typedjs text
      updateTypedText(true);

      //Speaker pulsating
      wooferAnim = animate(".speaker-big", {
        keyframes: [
          { scale: 1 },
          { scale: 1.08, duration: 100, easing: "easeInOutSine" },
          { scale: 1, duration: 100, easing: "easeInOutSine" },
          { scale: 1, duration: 0, delay: 80 },
        ],
        loop: true,
      });

      //Amp knobs rotating
      animate(".amp-knob", {
        rotate: 240,
      });

      //Progress bar filling up
      progressAnim.play();

      //Plays audio
      await playAudio();

      //Switch
      isPlaying = true;
    } else {
      //Switches icons
      playIcon.classList.remove("bi-play-fill");
      playIcon.classList.add("bi-pause-fill");

      //Updates typdjs text
      updateTypedText(false);

      //Pauses audio
      pauseAudio();

      //if wooferAnim exists, pauses speaker animation
      if (wooferAnim) {
        wooferAnim.pause();
        wooferAnim = null;
        document.querySelector(".speaker-big").style.transform = "scale(1)";
      }

      //Resets amp knobs
      animate(".amp-knob", {
        rotate: 0,
      });

      // Pause progress bar
      progressAnim.pause();

      //Switch
      isPlaying = false;
    }
  });
