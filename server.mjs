import { createRequestHandler } from "@remix-run/express";
import express from "express";
import sourceMapSupport from "source-map-support";

sourceMapSupport.install();

// notice that the result of `remix build` is "just a module"
import * as build from "./build/index.js";
import { broadcastDevReady } from "@remix-run/node";

const app = express();
app.use(express.static("public"));

// and your app is "just a request handler"
app.all("*", createRequestHandler({ build }));

app.listen(3000, () => {
  if (process.env.NODE_ENV === "development") {
    broadcastDevReady(build);
  }
  console.log("App listening on http://localhost:3000");
});