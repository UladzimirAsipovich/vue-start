// server.js
import { createSSRApp } from "vue";
import { renderToString } from "@vue/server-renderer";
import { app as APP } from "./main";

// const server = require("express")();
import express from "express";
const server = express();

server.get("*", async (req: any, res: any) => {
  const app = createSSRApp(APP);

  const appContent = await renderToString(app);
  res.end(appContent);
});

server.listen(8080);
