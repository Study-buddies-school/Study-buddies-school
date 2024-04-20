// Get the timer element
const timerElement = document.getElementById('timer');

// Get the iframe element
const iframeElement = document.querySelector('iframe');

// Set the initial time remaining in seconds
let timeRemaining = 60;

// Update the timer every second
const timerInterval = setInterval(() => {
  // Decrement the time remaining
  timeRemaining--;

  // Update the timer element
  timerElement.textContent = `Time Remaining: ${timeRemaining} seconds`;

  // If the time is up, submit the form
  if (timeRemaining === 0) {
    clearInterval(timerInterval);
    iframeElement.contentWindow.document.querySelector('form').submit();
  }
}, 1000);
