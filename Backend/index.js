const connectTOMongo = require("./db");
const express = require("express");
var cors = require("cors");

connectTOMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
// app.get('/', (req, res) => {
//   res.send('Hello Parth!')
// })
//Available Routes
app.use("/api/auth", require("./routes/auth.js"));
app.use("/api/notes", require("./routes/notes.js"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
