console.log('script.js successfully loaded!');
let messageEl = document.getElementById("message");

function downloadVideo() {
  const url = document.getElementById("video-url").value;

  if (!url) {
    messageEl.textContent = "Please enter a YouTube video URL.";
    return;
  }

  messageEl.textContent = "Downloading...";

  fetch('http://s1.phntmhosting.xyz:6909/download?url=' + encodeURIComponent(url))
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
      return response.text();
    })
    .then(data => {
      messageEl.textContent = data;
    })
    .catch(error => {
      messageEl.textContent = "Error: " + error.message;
    });
}
