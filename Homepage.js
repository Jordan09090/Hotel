function updateClock() {
  const timeElement = document.getElementById('time');
  const now = new Date();
  // Change to 12-hour time format with AM/PM
  timeElement.textContent = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initialize clock immediately
