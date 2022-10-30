import mongoose from 'mongoose'

const Post = new mongoose.Schema({ // structure of post request
    author: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
})

export default mongoose.model('Post', Post)
