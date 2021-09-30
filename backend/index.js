const express = require("express");
const cors = require("cors");
const { spawn } = require("child_process");
const fs = require("fs");

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

app.post("/doMagic", async (req, res) => {
  try {
    await runScript("./hello.sh");
    return res.send(req.body);
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
});

const runScript = async (scriptToRun) => {
  return new Promise((resolve, reject) => {
    script = spawn(scriptToRun, []);

    script.stdout.on("data", function (data) {
      console.log("stdout: " + data.toString());
    });

    script.stderr.on("data", function (data) {
      reject();
      console.log("stderr: " + data.toString());
    });

    script.on("exit", function (code) {
      console.log("child process exited with code " + code.toString());
      resolve();
    });
  });
};

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
