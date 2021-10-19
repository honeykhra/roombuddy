import mongoose from 'mongoose';

//Schema Setup
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    gender:String,
    location:String,
    propertytype:String,
    roomtype:String
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;