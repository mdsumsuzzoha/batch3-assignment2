import { ProductModel } from "../products/product.model";
import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";



const createOrder = async (inputData: TOrder) => {
    try {
        const product = await ProductModel.findById(inputData.productId);

        if (!product) {
            return { success: false, message: `Product with ID ${inputData.productId} not found.` };
        }

        let { quantity: productQty, inStock: productStk } = product.inventory;

        if (productQty < inputData.quantity) {
            return { success: false, message: "Insufficient quantity available in inventory. Order creation failed!" };
        }

        const result = await OrderModel.create(inputData);
        if (result) {
            productQty -= inputData.quantity;

            if (productQty <= 0) {
                productStk = false;
                productQty = 0;
            }

            product.inventory.quantity = productQty;
            product.inventory.inStock = productStk;
            await product.save();
            return { success: true, 
                message: "Order created successfully!",
                data: result };
        } else {
            return { success: false, message: "Order creation failed!" };
        }
    } catch (error) {
        return { success: false, message: "Failed to create order. Internal server error.", error: error };
    }
};


const searchOrder = async (email: string) => {
    try {
        const result = await OrderModel.find({ email: email });
        return result;
    } catch (error) {
        return { success: false, message: "Order search failed!" }
    }

}

const getOrder = async () => {
    const result = await OrderModel.find();
    return result;

}

export const OrderServices = {
    createOrder,
    getOrder,
    searchOrder,
} 