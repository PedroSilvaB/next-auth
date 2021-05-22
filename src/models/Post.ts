import mongoose from "../db/connect"
import { Post } from '../interfaces/Post'
const UserSchema = new mongoose.Schema<Post>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    keywords: [{
        type: String,
        required: true
    }],
    thumb: [{
        type: Object,
        required: true
    }],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    content: [{
        type: Object
    }],
    published: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },

})
export default mongoose.models.Post || mongoose.model<Post>("Post", UserSchema)