const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const IndexRouter = require("./routes/index");
const tarefasRouter = require("./routes/tarefas");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", IndexRouter);
app.use("/tarefas", tarefasRouter);

module.exports = app;
