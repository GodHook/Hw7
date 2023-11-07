var video = document.querySelector("video");
var speed = 1; // The speed should be  1  i think
var muted = false; // muted volume
var volume = 1; // Initial volume, where 1 is 100%

window.addEventListener("load", function() {
  console.log("Good job opening the window");
});

document.querySelector("#play").addEventListener("click", function() {
  if (video.paused) {  // if statment to check 
    video.play();
    console.log("Play Video");
  } else {
    video.pause();
    console.log("Pause Video");
  }
});

document.querySelector("#load").addEventListener("click", function() {
  video.load();
  console.log("Reload Video");
});

document.querySelector("#slow").addEventListener("click", function() {
  speed -= 0.1; // #slow is used here to  dcrease speed by 10%
  video.playbackRate = speed;
  console.log("Video Speed: " + (speed * 100) + "%");
});

document.querySelector("#speed").addEventListener("click", function() {
  speed += 0.1; // Increase speed by 10%
  video.playbackRate = speed;
  console.log("Video Speed: " + (speed * 100) + "%");
});

document.querySelector("#skip").addEventListener("click", function() {
  var currentTime = video.currentTime;
  var newTime = currentTime + 10; // This will skip ahead 10 seconds
  if (newTime > video.duration) {
    newTime = 0; // Restart if the video length is exceeded
  }
  video.currentTime = newTime;
  console.log("Current Video Location: " + newTime + " seconds");
});
// Check if the video is muted and unmuted 
document.querySelector("#mute").addEventListener("click", function() {
  if (!muted) {
    video.muted = true;
    muted = true;
    console.log("Video Muted");
  } else {
    video.muted = false;
    muted = false;
    console.log("Video Unmuted");
  }
});

document.querySelector("#slider").addEventListener("input", function() {
  volume = this.value / 100; // Update volume based on the slider
  video.volume = volume;
  document.querySelector("#volume").textContent = Math.round(volume * 100) + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
  video.classList.add("oldSchool"); // "oldSchool" class for styling
});

document.querySelector("#orig").addEventListener("click", function() {
  video.classList.remove("oldSchool"); // Remove the "oldSchool" class for styling
});





