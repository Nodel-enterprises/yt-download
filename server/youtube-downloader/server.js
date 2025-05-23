const express = require('express');
const fs = require('fs');
const cors = require('cors');
const youtubedl = require('youtube-dl-exec');
const path = require('path');
const app = express();
const port = 6909;

app.use(cors());
app.use(express.static('downloads')); // Serves static files

app.get('/download', async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).send('URL is required');
  }

  const filename = `video_${Date.now()}.mp4`;
  const outputPath = path.join(__dirname, 'downloads', filename);

  try {
    // Start downloading
    await youtubedl(url, {
      output: outputPath,
      format: 'best[ext=mp4]', // Ensure it downloads video
      noCheckCertificates: true,
      noWarnings: true,
      preferFreeFormats: true,
      verbose: true
    });

    // Check if file exists before responding
    fs.access(outputPath, fs.constants.F_OK, (err) => {
      if (err) {
        console.error('File not found after download');
        return res.status(500).send('Download failed');
      }

      res.json({
        message: 'Download completed',
        file: filename,
        url: `/` + filename // since served via express.static('downloads')
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while downloading the file.');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
