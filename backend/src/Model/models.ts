import mongoose from "mongoose"



const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const RecruiterSchema = new mongoose.Schema({
    name :{
        type : String,
        require : true

    },
    email: {
        type : String,
        require:true
    },

    password: {
    type: String,
    required: true,
  },

})

export const UserModels = mongoose.model("UserSchema",UserSchema)
export const RecruiterModel = mongoose.model("RecruiterSchema",RecruiterSchema)
