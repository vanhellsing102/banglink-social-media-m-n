import mongoose, { model, models } from "mongoose"

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    text: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    },
    video: {
        type: String,
        default: null
    }
}, {timestamps: true})

const Post = models.Post || model("Post", PostSchema);
export default Post;