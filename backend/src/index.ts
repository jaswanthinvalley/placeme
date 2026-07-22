import express from "express";
import dotenv from "dotenv";
import Db from "./db/Db.js";
import { RecruiterModel, UserModels } from "./Model/models.js";

const app = express();
dotenv.config();
const port = process.env.PORT;
app.use(express.json());

Db();

app.listen(port, () => console.log(`the server is running in the ${port}`));

app.get("/", (req, res) =>
  res.json({
    status: "the server is looking to the port",
  }),
);
app.get("/sucess", (req, res) => {
  res.json({
    status: "sucess",
  });
});

app.post("/createuser", (req, res) => {
  const { name, email, password } = req.body;
  UserModels.create({
    name: name,
    email: email,
    password: password,
  })
    .then((result) => res.status(201).json({ status: "success", user: result }))
    .catch((err) =>
      res.status(500).json({ status: "error", message: err.message }),
    );
});

app.post("/createrecu", (req, res) => {
  const { name, email, password } = req.body;
  RecruiterModel.create({
    name: name,
    email: email,
    password: password,
  })
    .then((result) => res.status(201).json({ status: "success", user: result }))
    .catch((err) =>
      res.status(500).json({ status: "error", message: err.message }),
    );
});
