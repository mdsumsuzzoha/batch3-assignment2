import { Request, Response } from "express";
import { ProductServices } from "./product.service"

const createProduct = async (req: Request, res: Response) => {

    try {
        const productInputData = req.body;
        const result = await ProductServices.createProduct(productInputData)
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Product could not saved!",
            error: error,
        })
    }

}
const getAllProducts = async (req: Request, res: Response) => {
    try {
        const result = await ProductServices.getAllProducts()
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Product fetched failed!",
            error: error,
        })
    }

}
const getSpecificProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await ProductServices.getSpecificProduct(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Product fetched failed!",
            error: error,
        })
    }

}




export const ProductControllers = {
    createProduct,
    getAllProducts,
    getSpecificProduct
}