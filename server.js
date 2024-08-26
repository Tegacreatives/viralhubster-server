dotenv = require("dotenv");

dotenv.config({
  path: "./config.env",
});

port = process.env.PORT || 3000;

app = require("./app");

app.listen(port, () => {
  console.log(`app started on port ${port}`);
});
