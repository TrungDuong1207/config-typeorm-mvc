import express from "express";
import { BlogAPIController } from "../controllers/blog.api.controller";

export const apiRouterBlog = express.Router();

apiRouterBlog.get("/blog/list", async (req, res) => {
    BlogAPIController.getListApiBlog(req, res);
});







