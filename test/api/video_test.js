const mocha = require('mocha');
const describe = mocha.describe;
const assert = require('assert');
const main = require('../../main')
require('dotenv').config()

const videoRouter = require('../../routes/videoRouter')
const Video = require('../../models/Video');

const mongoose = require('mongoose');

before( () => {
    mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection
    db.on('error', (error) => console.error(error));
    db.once('open', () => console.log('Connected to Database'));
})



describe('VIDEO API', () => {

    beforeEach(async () => {

        Video.collection.drop();

        this.video = {
            title: 'First Video',
            url: 'http://123/456'
        }


    });

    it('Create a new video in DB', async () => {

    });
})
