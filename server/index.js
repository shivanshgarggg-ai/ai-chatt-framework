console.log("Server running");
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", (req, res) => {
  const { message } = req.body;

  res.json({
    reply: "You said: " + message
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
