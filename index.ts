import multer from 'multer';
const upload = multer();
import express from "express";
import bodyParser from 'body-parser';
import { AppDataSource } from "./src/data-source";
import { Blog } from "./src/entity/Blog";
import { apiRouterBlog } from "./src/routers/blog.api.router";
const PORT = 3000;
const app = express();
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(bodyParser.json());
app.use(express.json());
AppDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })
export let blogRepo = AppDataSource.getRepository(Blog);
app.use("/api", apiRouterBlog);
app.listen(PORT, () => {
  console.log("App running with port: " + PORT)
})



