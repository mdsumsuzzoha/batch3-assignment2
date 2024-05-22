import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProduct = async (inputPayLoad: TProduct) => {
    const result = await ProductModel.create(inputPayLoad);
    return result;
}

export const ProductServices = {
    createProduct
} 