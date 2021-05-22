
import { User } from '../interfaces/User'
import mongoose from "../db/connect"
const UserSchema = new mongoose.Schema<User>({
    name: {
        type: String,
        required: [true, "Name not informat!"],
        maxlength: [60, 'Name cannot be more than 60 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email exixtente!"],
        lowercase: true

    },
    isAdmin: {
        type: Boolean,
        default: false,
        unique: true
    },
    image: {
        type: String,
        default: null
    }
})
export default mongoose.models.User || mongoose.model<User>("User", UserSchema)