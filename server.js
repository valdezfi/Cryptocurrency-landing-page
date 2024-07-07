const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5173;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/config.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.send(`window.env = { MIXPANEL_ACCESS_CODE: '${process.env.MIXPANEL_ACCESS_CODE}' };`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
