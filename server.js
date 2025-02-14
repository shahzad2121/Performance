const express = require("express");
const cluster = require('cluster')

const app = express();

cluster.schedulingPolicy = cluster.SCHED_RR;

function delay(duration) {
  const time = Date.now();
  while (Date.now() - time < duration) {}
}

app.get("/", (req, res) => {
  res.send(`Listening at port ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send(`Processed by worker ${process.pid}`);
});

  app.listen(3000, () => {
    console.log(`Worker ${process.pid} listening on port 3000`);
  });

