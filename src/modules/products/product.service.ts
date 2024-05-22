import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProduct = async (inputPayLoad: TProduct) => {
    const result = await ProductModel.create(inputPayLoad);
    return result;
}
const getAllProducts = async () => {
    const result = await ProductModel.find();
    return result;
}
const getSpecificProduct = async (id: string) => {
    const result = await ProductModel.findOne({ id });
    return result;
}


export const ProductServices = {
    createProduct,
    getAllProducts,
    getSpecificProduct
} 