import express from "express";

const PORT = 4000;
const app = express();

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
});

process.on('SIGINT', () => {
  console.info('SIGINT signal received.');
});