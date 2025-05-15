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
    description: {
        type: String,
        default: null
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
    },
    like: [
        {
            type: String,
            unique: true
        }
    ],
    comment: [
        {
            userId: {
                type: String
            },
            userName: {
                type: String
            },
            text: {
                type: String
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
}, {timestamps: true})

const Post = models.Post || model("Post", PostSchema);
export default Post;