import userModel from "../models/userModel.js";

export const getStaffs = async (req, res) => {
    try {
        const staffs = await userModel.find({ role: { $ne: 'Customer' } }).select('-password');
        res.status(200).json(staffs);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

export const getCustomers = async (req, res) => {
    try {
        const customers = await userModel.find({ role: 'Customer' }).select('-password');
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};
