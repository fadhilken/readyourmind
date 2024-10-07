function revealNumber() {
    const userNumber = document.getElementById('userNumber').value;
    const loading = document.getElementById('loading');
    const loadingText = document.getElementById('loadingText');
    const progressBar = document.getElementById('progressBar');
    const result = document.getElementById('result');

    // Show loading animation
    loading.style.display = 'block';
    result.innerHTML = '';
    loadingText.innerHTML = '';

    const phrases = [
        "Analyzing brainwaves...",
        "Scanning memories...",
        "Calculating probabilities...",
        "Decoding thoughts..."
    ];

    let index = 0;

    // Function to update loading text and progress bar
    const interval = setInterval(() => {
        if (index < phrases.length) {
            loadingText.innerHTML = phrases[index];
            progressBar.style.width = `${(index + 1) * 25}%`; // Update progress bar
            index++;
        } else {
            clearInterval(interval);
            loadingText.innerHTML = `You are thinking of the number ${userNumber}!`; // Show the user's inputted number
            progressBar.style.width = '100%'; // Complete the progress bar
            showConfetti(); // Call the confetti function
            playSound(); // Call the sound function
        }
    }, 1000); // Change phrase every second
}

// Function to show confetti
function showConfetti() {
    const confetti = document.createElement('script');
    confetti.src = 'https://cdn.rawgit.com/catnap/Confetti.js/master/confetti.js'; // Example confetti library
    document.body.appendChild(confetti);
}

// Function to play sound
function playSound() {
    const audio = new Audio('https://example.com/success-sound.mp3'); // Add your own sound file URL
    audio.play();
}
