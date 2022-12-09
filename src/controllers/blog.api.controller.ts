import { blogRepo } from "../../index";
export class BlogAPIController {

    static async getListApiBlog(req, res) {

        try {
            const blogs = await blogRepo.find();

            if (blogs) {

                res.status(200).json({ message: "Sucess", blogs: blogs })

            }

        } catch (err) {

            res.status(500).json({ message: err.mesage })

        }
    }
    
}