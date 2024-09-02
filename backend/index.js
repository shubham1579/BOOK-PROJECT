import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import BookRoutes from "./routes/BookRoutes.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN Stack Book Shop");
});

app.use("/books", BookRoutes);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to db");
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
