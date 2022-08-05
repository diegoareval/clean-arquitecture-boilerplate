import "dotenv/config";
import express from "express";
import cors from "express";
import userRoute from "./infraestructure/router/user.router";
import {dbInit} from "./infraestructure/db";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use(userRoute);
dbInit().then();
app.listen(port, () => console.log(`Initialized on: ${port}`));