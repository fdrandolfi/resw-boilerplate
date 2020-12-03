/* eslint-disable no-console */
const express = require('express');
const os = require('os');

const e = express();
e.use(express.static('dist'));

e.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

const PORT = process.env.PORT || 8080;
e.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
