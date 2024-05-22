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
    } catch (error) {
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

    } catch (error) {
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

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Product fetched failed!",
            error: error,
        })
    }

}
const updateSpecificProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const updatedFields = req.body;

        const result = await ProductServices.updateSpecificProduct(productId, updatedFields);

        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Product updated failed!",
            error: error,
        })
    }

}
const deleteSpecificProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;

        const result = await ProductServices.deleteSpecificProduct(productId);

        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Product deleted successfully!",
                data: result,
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Product updated failed!",
            error: error,
        })
    }

}


const searchProducts = async (req: Request, res: Response) => {
    try {
        const searchTerm = req.query.searchTerm as string;
        const result = await ProductServices.searchProducts(searchTerm)

        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Products not found"
            });
        } else {
            res.status(200).json({
                success: true,
                message: `Products matching search term ${searchTerm} fetched successfully!`,
                data: result,
            });
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Product not fount!",
            error: error,
        })
    }

}



export const ProductControllers = {
    createProduct,
    getAllProducts,
    getSpecificProduct,
    updateSpecificProduct,
    deleteSpecificProduct,
    searchProducts
}