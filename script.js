const playButton = document.getElementById('playButton');
const sound = document.getElementById('sound');

playButton.addEventListener('click', function() {
    if (sound.paused) {
        sound.currentTime = 0; // Reset sound to the beginning
        sound.play();
        playButton.textContent = 'Listen carefully...'; // Change button text
    } else {
        sound.pause(); // Pause if clicked again
        playButton.textContent = 'Tap Here'; // Change button text back
    }
});

// Update button text when sound ends
sound.addEventListener('ended', function() {
    playButton.textContent = 'Tap Here'; // Reset button text
});

