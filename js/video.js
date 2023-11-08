// var video = document.getElementById("player1");
// var speed = 1; // The speed should be  1  i think
// var muted = false; // muted volume
// var volume = 1; // Initial volume, where 1 is 100%

const video = document.querySelector("#player1");

window.addEventListener("load", function() {
  console.log("Good job opening the window");

  video.autoplay = false;
  video.pause();
  video.loop = false;
  video.volume = document.querySelector("#slider").value/100;
});

document.querySelector("#play").addEventListener("click", function() {
  console.log("Play Video");
  video.play();
  document.querySelector("#volume").textContent = Math.round(video.volume*100) +"%";
});

// Add event listener for pause button
document.querySelector("#pause").addEventListener("click", function() {
  console.log("Pause Video");
  video.pause();
});

document.querySelector("#load").addEventListener("click", function() {
  video.autoplay = false;
  video.pause();
  video.loop = false;
  video.volume = document.querySelector("#slider").value/100;
  console.log("Reload Video");
});

document.querySelector("#slow").addEventListener("click", function() {
  video.playbackRate *= 0.9;
  video.playbackRate -= 0.1;
  console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
 
  video.playbackRate /=0.9;
  console.log("New speed is " + video.playbackRate);

});

document.querySelector("#skip").addEventListener("click", function() {
  if(video.currentTime + 10< video.duration) {
    video.currentTime = 0;
  }else{
    video.currentTime += 10;
  };


  
  // This will skip ahead 10 seconds

  console.log("Current location is " + videocurrentTime);

});


// Check if the video is muted and unmuted 
document.querySelector("#mute").addEventListener("click", function() {
  if (video.muted) {
    video.muted = false;;
    this.textcontent = false;
  } else {
    video.muted =true;
    this.textcontent =  "Unmute"
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





