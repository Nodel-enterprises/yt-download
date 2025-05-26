console.log('script.js successfully loaded!');
let messageEl = document.getElementById("message");

function downloadVideo() {
  const url = document.getElementById("video-url").value;

  if (!url) {
    messageEl.textContent = "Please enter a YouTube video URL.";
    return;
  }

  messageEl.textContent = "Downloading...";

  fetch('http://localhost:6909/download?url=' + encodeURIComponent(url))
    .then(response => response.json())
    .then(data => {
      if (data && data.url) {
        const downloadUrl = data.url; // Use the full URL from the backend
        messageEl.innerHTML = `Download complete: <a href="${downloadUrl}" download>Click here to download</a>`;
      } else if (data && data.error) {
        messageEl.textContent = "Error: " + data.error;
      } else {
        messageEl.textContent = "Unexpected server response.";
      }
    })
    .catch(error => {
      messageEl.textContent = "Error: " + error.message;
    });
};