import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    phone_number: {
        type: Number,
        required: true
    }// ,
    // role:{
        // type: String,
        // enum: ['user', 'admin']
        // default: 'user'
    // }
}, {
    timestamps: true
});
const Login = mongoose.model('Login', loginSchema);
export default Login;


