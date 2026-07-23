import mongoose from "mongoose"
import { title } from "node:process";



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


const JobSchema = new mongoose.Schema({
  title: {
    type : String,
    required : true
  },
  salary: {
    type : String,
    require : true
  },
  description :{
    type : String,
    require :true
  }

})

export const UserModels = mongoose.model("UserSchema",UserSchema)
export const RecruiterModel = mongoose.model("RecruiterSchema",RecruiterSchema)
export const JobModel = mongoose.model("JobSchema",JobSchema)
