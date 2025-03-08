import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
        {
            menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: "Menu", required: true },
            quantity: { type: Number, required: true }
        }
    ],
    status: {
        type: String,
        enum: ["Pending", "Accepted", "Preparing", "Completed", "Cancelled"],
        default: "Pending"
    },
    totalAmount: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema);
