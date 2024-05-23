import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import orderValidationSchema from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
    try {
        const orderInputData = req.body;

        // data Validation by zod 
        const zodParseData = orderValidationSchema.parse(orderInputData);

        const result = await OrderServices.createOrder(zodParseData);

        if (result && '_id' in result) {
            return res.status(200).json({
                success: true,
                message: "Order created successfully!",
                data: result
            });
        } else {
            return res.status(500).json(result);
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Order could not be saved!",
            error: error
        });
    }
};


const getOrder = async (req: Request, res: Response) => {
    try {
        const email = req.query.email as string | undefined;

        if (email) {
            const result = await OrderServices.searchOrder(email);
            if (Array.isArray(result)) {
                if (result.length === 0) {
                    res.status(404).json({
                        success: false,
                        message: "Order not found",
                    });
                } else {
                    res.status(200).json({
                        success: true,
                        message: `Orders fetched successfully for user email ${email}`,
                        data: result,
                    });
                }
            }
        } else {
            const result = await OrderServices.getOrder();
            res.status(200).json({
                success: true,
                message: "Order fetched successfully!",
                data: result,
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Order fetch failed!",
            error: error,
        });
    }
};


export const OrderControllers = {
    createOrder,
    getOrder,
}