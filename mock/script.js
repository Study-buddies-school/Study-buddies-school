// Get the timer element
const timerElement = document.getElementById('timer');

// Get the iframe element
const iframeElement = document.querySelector('iframe');

// Set the initial time remaining in seconds
let timeRemaining = 60;

// Function to submit the form
function submitForm() {
  const iframeWindow = iframeElement.contentWindow;
  const iframeDocument = iframeWindow.document;
  const formElement = iframeDocument.querySelector('form');

  if (formElement) {
    const submitButton = formElement.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.click();
    } else {
      formElement.submit();
    }
  }
}

// Update the timer every second
const timerInterval = setInterval(() => {
  // Decrement the time remaining
  timeRemaining--;

  // Update the timer element
  timerElement.textContent = `Time Remaining: ${timeRemaining} seconds`;

  // If the time is up, submit the form
  if (timeRemaining === 0) {
    clearInterval(timerInterval);
    submitForm();
  }
}, 1000);
