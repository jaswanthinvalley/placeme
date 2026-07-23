import { Router } from "express";
import { JobModel } from "../Model/models.js";

const route = Router()

route.route("/createjobs").post((req,res) => {
    const {title,salary,description} = req.body
    JobModel.create({
        title : title,
        salary : salary,
        description : description
    })
    .then((r) => res.json({status : "job creation sucessful"}))
    .catch((err) => res.json({status : "job creation failed",error : err}))

})

export default  route;