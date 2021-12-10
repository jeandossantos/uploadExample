const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');


main().catch(e => console.log(e));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/upload');
}

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(require('./routes'));

app.listen(3001, () => console.log('Back-End running on port 3001...'));