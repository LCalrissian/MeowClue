const playButton = document.getElementById('playButton');
const sound = document.getElementById('sound');

playButton.addEventListener('click', function() {
    if (sound.paused) {
        sound.currentTime = 0; // Reset sound to the beginning
        sound.play();
        playButton.textContent = 'Listen carefully...'; // Change button text
    } else {
        sound.pause(); // Pause if clicked again
        playButton.textContent = 'Paused'; // Change button text back
    }
});

// Update button text when sound ends
sound.addEventListener('ended', function() {
    playButton.textContent = 'Tap Here to Play Again'; // Reset button text
});

