document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("video-background");
    const playButton = document.getElementById("play-button");

    playButton.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            playButton.textContent = "⏸ Pause";
        } else {
            video.pause();
            playButton.textContent = "🔊 Play";
        }
    });
});