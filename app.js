express = require("express");

const userRouter = require("./routes/userRoutes");
const imageRouter = require("./routes/imageRoutes");
const sentimentRoutes = require("./routes/sentimentRoutes");

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/images", imageRouter);
app.use("/api/sentiment", sentimentRoutes);

module.exports = app;
