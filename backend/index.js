const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post("/", (req, res) => {
  res.send({
    done: true,
  });
});

app.post("/doMagic", (req, res) => {
  exec("sh hello.sh", (error, stdout, stderr) => {
    console.log(stdout);
    console.warn(stderr);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
