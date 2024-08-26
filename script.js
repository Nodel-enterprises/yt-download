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

const fs = require('fs');
const ytdl = require('ytdl-core');

const options = {
    // Specify your desired options here
    range: { start: 10355705, end: 12452856 }, // Example byte range
    begin: '1:30', // Example start time
    liveBuffer: 20000, // Example live buffer time (in milliseconds)
    highWaterMark: 1024 * 512, // Example highWaterMark (512KB)
    dlChunkSize: 10 * 1024 * 1024, // Example chunk size (10MB)
    IPv6Block: '2001:db8::/32', // Example IPv6 block
};

const videoUrl = 'http://www.youtube.com/watch?v=aqz-KE-bpKQ';

ytdl(videoUrl, options)
    .pipe(fs.createWriteStream('youtube-dl-nodel-enterprises.mp4'));
