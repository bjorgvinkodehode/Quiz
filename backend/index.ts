const express = require('express');
const app = express();
const port = 3001; // Use a different port from your React app  

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
