import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json("App is running");
});

app.get("/health", (req, res) => {
  res.json("OK");
});

export default app;
