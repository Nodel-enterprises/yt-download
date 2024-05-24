const ytdl = require('ytdl-core');

// Usage
document.getElementById('link').addEventListener('input', function(e) {
    var url = e.target.value;
    if (isValidYoutubeLink(url)) {
        console.log('Valid YouTube link');
        // Perform actions for a valid link
    } else {
        console.log('Invalid YouTube link');
        // Perform actions for an invalid link
    }
});

function isValidYoutubeLink(url) {
    const pattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    return pattern.test(url);
}

// Usage
document.getElementById('link').addEventListener('input', function(e) {
    const url = e.target.value;
    if (isValidYoutubeLink(url)) {
        console.log('Valid YouTube link');
        // Perform actions for a valid link
        // Example: Fetch video info
        ytdl.getInfo(url, (err, info) => {
            if (err) {
                console.error('Error fetching video info:', err);
            } else {
                console.log('Video title:', info.title);
                console.log('Video author:', info.author.name);
            }
        });
    } else {
        console.log('Invalid YouTube link');
        // Perform actions for an invalid link
    }
});