import { TProduct, UpdatedFields, } from "./product.interface";
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
    const result = await ProductModel.findById(id);
    return result;
}
const updateSpecificProduct = async (id: string, updatedFields: UpdatedFields) => {
    const result = await ProductModel.findByIdAndUpdate(id, updatedFields, { new: true });
    return result;
}
const deleteSpecificProduct = async (id: string, ) => {
    const result = await ProductModel.findByIdAndDelete(id);
    return result;
}


export const ProductServices = {
    createProduct,
    getAllProducts,
    getSpecificProduct,
    updateSpecificProduct,
    deleteSpecificProduct
} 