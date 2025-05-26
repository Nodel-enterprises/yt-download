const express = require('express');
const fs = require('fs');
const cors = require('cors');
const youtubedl = require('youtube-dl-exec');
const path = require('path');
const app = express();
const port = 6909;

app.use(cors());
app.use(express.static('downloads')); // Serve files from "downloads" folder

// Helper to sanitize file names
function sanitizeFilename(name) {
  return name.replace(/[^a-z0-9_\-\.]/gi, '_').substring(0, 100);
}

app.get('/download', async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).send('URL is required');
  }

  try {
    // Fetch video info to get the title
    const info = await youtubedl(url, {
      dumpSingleJson: true,
      noCheckCertificates: true,
      noWarnings: true,
      preferFreeFormats: true,
      youtubeSkipDashManifest: true,
    });

    const title = info.title || `video_${Date.now()}`;
    const safeTitle = sanitizeFilename(title);
    const filename = `${safeTitle}.mp4`;
    const outputPath = path.join(__dirname, 'downloads', filename);

    console.log(`Downloading video: "${title}"`);
    console.log(`Saving as: ${filename}`);

    // Download video
    await youtubedl(url, {
      output: outputPath,
      format: 'best[ext=mp4]',
      noCheckCertificates: true,
      noWarnings: true,
      preferFreeFormats: true,
      verbose: true
    });

    console.log(`Downloaded! Video saved as: ${filename}`);

    fs.access(outputPath, fs.constants.F_OK, (err) => {
      if (err) {
        console.error('File not found after download');
        return res.status(500).send('Download failed');
      }

      const downloadUrl = '/' + encodeURIComponent(filename);

      // Optional: Show HTML page with download link if html=true
      if (req.query.html === 'true') {
        return res.send(`
          <html>
            <body style="font-family:sans-serif;padding:2em;">
              <h2>Download completed</h2>
              <p><a href="${downloadUrl}" download>Click here to download "${filename}"</a></p>
            </body>
          </html>
        `);
      }

      // Default: JSON response
      res.json({
        message: 'Download completed',
        file: filename,
        url: downloadUrl
      });
    });
  } catch (err) {
    console.error('Error during download:', err);
    res.status(500).send('An error occurred while downloading the file.');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
