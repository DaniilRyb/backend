import Router from "express"
import PostController from "./PostController.js";

const router = new Router()

router.get('/posts', PostController.getAll) // method GET
router.get('/posts/:id', PostController.getOne) // method GET
router.put('/posts', PostController.update) // method PUT
router.post('/posts', PostController.create) // method POST
router.delete('/posts/:id', PostController.delete) // method DELETE

export default router
