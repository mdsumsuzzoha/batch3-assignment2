import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
    try {
        const orderInputData = req.body;
        const result = await OrderServices.createOrder(orderInputData);

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






export const OrderControllers = {
    createOrder,
}