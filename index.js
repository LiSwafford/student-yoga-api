const express = require('express');
const cors = require('cors');

const { getPoses, getPose } = require(`${__dirname}/controllers/poseCtrl`);

const port = 3001;

const app = express();

app.use(cors());

app.use((req, res, next) => {
  if (req.method !== 'GET')
    return res.status(405).json({ message: 'This API is read-only' });
  next();
});

app.get('/api/poses', getPoses);

app.get('/api/poses/:id', getPose);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
