const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  // Serve static content
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.use("/todos", require("./routes/todo.route"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
