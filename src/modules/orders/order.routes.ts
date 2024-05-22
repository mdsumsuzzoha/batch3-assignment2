import express from "express"
import { OrderControllers } from "./order.controller";
const router = express.Router()



router.post('/', OrderControllers.createOrder)
// router.get('/', ProductControllers.searchProducts);
// router.get('/', ProductControllers.getAllProducts)
// router.get('/:productId', ProductControllers.getSpecificProduct);
// router.put('/:productId', ProductControllers.updateSpecificProduct);
// router.delete('/:productId', ProductControllers.deleteSpecificProduct);



export const OrderRoutes = router;