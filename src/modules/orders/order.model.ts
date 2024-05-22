import  { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

const OrderSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
        // type: mongoose.Schema.Types.ObjectId,
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
},
    {
        versionKey: false // Exclude __v field
    }
);
export const OrderModel = model<TOrder>('Order', OrderSchema);
