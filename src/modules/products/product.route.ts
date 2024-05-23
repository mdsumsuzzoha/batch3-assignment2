import express from "express"
import { ProductControllers } from "./product.controller";
const router = express.Router()



router.post('/', ProductControllers.createProduct)
router.get('/', ProductControllers.getProduct)
router.get('/:productId', ProductControllers.getSpecificProduct);
router.put('/:productId', ProductControllers.updateSpecificProduct);
router.delete('/:productId', ProductControllers.deleteSpecificProduct);



export const ProductRoutes = router;