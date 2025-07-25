import express from "express";
import cors from "cors";
import "dotenv/config";
import dataBase from "./configure/db.js";
import routes from "./routes/userRoutes.js";
const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);

app.use("/user", routes);
dataBase();
app.listen(PORT, () => {
  console.log(`Your Server is Listening at port http://${HOST}:${PORT}`);
});
