const express = require('express');
const app = express();
const youtubedl = require('youtube-dl-exec');
const logger = require('progress-estimator')()
const port = 3000;

app.use(express.static('downloads'));

app.get('/download', async (req, res) => {
  const url = req.query.url;
  const clientId = req.query.clientId;

  if (!url) {
    return res.status(400).send('URL is required');
  }

  downloadProgress[clientId] = 0;

  try{
    const filePath = `downloads/${url.split('/').pop()}_${Date.now()}.mp4`;
    const promise = youtubedl(url, { dumpSingleJson: true })
    const result = await logger(promise, `Obtaining url: ${url}`)
  }
  catch(err){
    console.log(err)
  }

})

app.listen(port, () => {
  console.log(`Server listening at https//s1.phntmhosting.xyz:${port}`);
})