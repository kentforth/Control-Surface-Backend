const mongoose = require('mongoose')

const videSchema = new mongoose.Schema({
                                           title: {
                                               type: String,
                                               required: true
                                           },
                                           url: {
                                               type: String,
                                               required: true
                                           },
                                           date: {
                                               type: Date,
                                               default: Date.now()

                                           }
                                       })

module.exports = mongoose.model('Video', videSchema)
