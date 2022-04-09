const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const {
  authRouter,
  statisticsRouter,
  transactionsRouter,
} = require("./routes");
const { notFound, serverError } = require("./libs/http-responses");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/users", authRouter);
app.use("/api/transactions", transactionsRouter);
app.use("/api/statistics", statisticsRouter);

app.use((req, res) => {
  res.status(notFound.code).json({ message: notFound.status });
});

app.use((err, req, res, next) => {
  const { status = serverError.code, message = serverError.status } = err;

  res.status(status).json(message);
});

module.exports = app;
