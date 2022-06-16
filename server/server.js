const express = require('express');
const cors = require('cors');
const path = require ('path');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

const port = process.env.PORT || 4005; //4005 is to run server locally

app.listen(port, () => {
    console.log(`Serving you on port ${port}`);
});