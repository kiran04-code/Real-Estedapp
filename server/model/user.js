import mongoose from "mongoose";

const UserSchema = new  mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    photo:{
        type:String,
        default:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4866.jpg"
    }
})

const user = mongoose.model("user",UserSchema)

export default user