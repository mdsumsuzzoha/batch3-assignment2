import express, { Request, Response } from "express"
import { ProductModel } from "./product.model";
const router = express.Router()

router.post('/', async (req: Request, res: Response) => {
    const productInputData = req.body;
    const result = await ProductModel.create(productInputData);
    res.json({
        success: true,
        message: "Product created successfully!",
        data: result
    })
})

export const ProductRoutes = router;