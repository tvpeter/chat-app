import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    pic: {
        type: String,
        default: 'https://img.icons8.com/ios-glyphs/30/000000/user--v1.png',
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
},
{
    timestamps: true
});

const User = mongoose.model("User", userSchema);

export {User };
