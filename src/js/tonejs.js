//Olivier Laliberté - 2025
import * as Tone from "tone.js";

//Tone.js variables
export let player;
let pauseTime = 0;
let isPaused = true;

//Initializes player; audiopath passed from anime.js
export function initPlayer(audioPath) {
  //If no player has been created, create one
  if (!player) {
    player = new Tone.Player({
      url: audioPath,
    }).toDestination();
  }
}

//Plays or resumes audio
export async function playAudio() {
  //Browser verifications
  await Tone.start();

  //Fetches pause time and gives it to player.start
  //Makes it possible to 'pause' the audio and then play it again without it restarting
  const startTime =
    Number.isFinite(pauseTime) && pauseTime >= 0 ? pauseTime : 0;
  player.start(undefined, startTime);
  //Custom customStartTime property
  player.customStartTime = Tone.now() - startTime;
  isPaused = false;
}

//Pauses audio
export function pauseAudio() {
  //Stops audio and fetches pause time if it's not 0; else it gives it 0
  pauseTime = Tone.now() - (player.customStartTime || 0);
  //Custom manualStop property
  player.manualStop = true;
  player.stop();
  isPaused = true;
}

//Callback when audio stops naturally
export function onAudioStop(callback) {
  if (!player) return;
  player.onstop = () => {
    if (player.manualStop) {
      //Manual pause; don’t reset
      player.manualStop = false;
      return;
    }

    //Audio naturally ended
    //Resets pauseTime so next play starts from beginning
    pauseTime = 0;

    //Callback
    if (callback) callback();
  };
}
