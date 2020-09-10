require('dotenv').config()

const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));



app.use(express.json());
app.use(cors());

const videoRouter = require('./routes/videoRouter')
app.use('/api', videoRouter);

app.listen(4050, () => {
    console.log('Server started....')
})
