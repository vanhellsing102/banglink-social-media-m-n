import mongoose, { model, models } from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: null
    },
    requestedUser: [
        {
            type: String,
            unique: true,
            default: null
        }
    ],
    friends: [
        {
            type: String,
            unique: true,
            default: null
        }
    ]
}, {timestamps: true})

const User = models.User || model("User", UserSchema);

export default User;