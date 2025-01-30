const express = require('express');
const fs = require('fs');
const cors = require('cors');
const youtubedl = require('youtube-dl-exec');
const logger = require('progress-estimator')();
const port = 6909;

app.use(cors()); 

const app = express();
const downloadProgress = {}; // Initialize download progress tracking

app.use(express.static('downloads'));

app.get('/download', async (req, res) => {
  const url = req.query.url;
  const clientId = req.query.clientId;

  if (!url) {
    return res.status(400).send('URL is required');
  }

  downloadProgress[clientId] = 0;

  try {
    const filePath = `downloads/${url.split('/').pop()}_${Date.now()}.mp4`;

    // Set up the download promise
    const promise = youtubedl(url, {
      output: filePath,
      dumpSingleJson: true,
    });

    // Log download progress
    await logger(promise, `Obtaining URL: ${url}`);

    // After download, send success response
    res.send({ message: 'Download completed', filePath });
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while downloading the file.');
  }
});

app.listen(port, () => {
<<<<<<< HEAD
  console.log(`Server listening at https//s1.phntmhosting.xyz:${port}`);
});
=======
  console.log(`Server listening at https://s1.phntmhosting.xyz:${port}`);
});

>>>>>>> 9118678273d611edd680e671d8dbed3ae77aa613