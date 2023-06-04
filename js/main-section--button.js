let button = document.getElementById("main-section--button");
let video = document.getElementById("walking-video");

function play_pause() {
    if (video.paused == false) {
        video.pause();
        button.textContent = "play_arrow";
    }

    else {
        video.play();
        button.textContent = "pause";
    }
}

function video_ended() {
    video.pause()
    button.textContent = "play_arrow";
}