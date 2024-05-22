import express from 'express'
import { ProductRoutes } from './modules/products/product.route'
import { OrderRoutes } from './modules/orders/order.routes';
const app = express()

//parser
app.use(express.json());

app.use('/api/products', ProductRoutes)
app.use('/api/orders', OrderRoutes)



export default app