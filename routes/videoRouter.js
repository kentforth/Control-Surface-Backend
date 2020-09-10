const express = require('express');
const router = express.Router();
const Video = require('../models/Video')
//Get all videos
router.get('/videos', async (req, res) => {
    try {
        const videos = await Video.find().sort({date:-1});
        await res.json(videos);
    } catch(error) {
        await res.status(500).json({message: error.message});
    }
})

//get a single video
router.get('/videos/:id',getVideo, (req, res) => {
    res.json(res.video)
})

//create video
router.post('/videos', async (req, res) => {
    const video = new Video({
                                title: req.body.title,
                                url: req.body.url
                            });
    try {
        const newVideo = await video.save();
        await res.status(201).json(newVideo);
    } catch (error) {
await res.status(400).json({message: error.message})

    }
})

//update video
router.put('/videos/:id', getVideo, async (req, res) => {
    if (req.body.title != null) {
        res.video.title = req.body.title;

    }

    if (req.body.title != null) {
        res.video.url = req.body.url;
    }

    try {
        const updatedVideo = await res.video.save();
        await res.json(updatedVideo);
    } catch (error){
        await res.status(400).json({message: error.message})
    }
})

//delete video
router.delete('/videos/:id', getVideo, async (req, res) => {
try{
    await res.video.remove();
    await res.json({message: 'Deleted Video'})
}catch(error) {
await res.status(500).json({message: error.message})
}
})

async function getVideo(req, res, next) {
    let video;
    try {
        video = await Video.findById(req.params.id);
        if (video == null) {
            return res.status(404).json({message: 'Cannot find video'});
        }
    } catch (error){
        return res.status(500).json({message: error.message});
    }
    res.video = video;
    next();
}


module.exports = router;
