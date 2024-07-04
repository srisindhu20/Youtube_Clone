import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
    unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        },
    password: {
        type: String,
        
    },
    img: {
        type: String,
    },
    subscribers: {
        type:Number,
        default:0
    },
    SubscribedUsers: {
        type: [String]
    },
    fromGoogle:{
        type: Boolean,
        default: false,
    },
    points: {
        type: Number,
        default: 0,
    },
}, { timestamps: true}
);

export default mongoose.model("User", UserSchema);