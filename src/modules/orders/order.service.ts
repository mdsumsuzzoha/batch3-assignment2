import { ProductModel } from "../products/product.model";
import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrder = async (inputData: TOrder) => {
    try {
        const product = await ProductModel.findById(inputData.productId);

        if (!product) {
            return { success: false, message: `Product with ID ${inputData.productId} not found.` };
        }

        let productQty = product.inventory.quantity;
        let productStk = product.inventory.inStock;

        if (product.inventory.quantity < inputData.quantity) {
            return { success: false, message: "Insufficient quantity available in inventory. Order creation failed!" };
        } else if (productStk) {
            const result = await OrderModel.create(inputData);
            if (result) {
                productQty -= inputData.quantity;
                await product.save();
                if (productQty <= 0) {
                    productStk = false;
                    productQty = 0;
                    product.inventory.inStock = productStk;
                    product.inventory.quantity = productQty;
                    await product.save();
                }
                return result;
            } else {
                return { success: false, message: "Order creation failed!" };
            }
        }
    } catch (error) {
        return { success: false, message: "Failed to create order. Internal server error.", error: error };
    }
};


export const OrderServices = {
    createOrder,
    // getAllProducts,
    // getSpecificProduct,
    // updateSpecificProduct,
    // deleteSpecificProduct,
    // searchProducts
} 