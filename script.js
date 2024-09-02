let messageEl = document.getElementById("message");

function downloadVideo() {
  const url = document.getElementById("video-url").value;

  if (!url) {
    messageEl.textContent = "Please enter a YouTube video URL.";
    return;
  }

  messageEl.textContent = "Downloading...";

  fetch('http://localhost:3000/download?url=' + encodeURIComponent(url))
    .then (response => response.text())
    .then (data => {
      messageEl.textContent = data;
    });
}