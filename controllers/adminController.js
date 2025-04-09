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

export const createAccount = async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).json({ message: "Account created successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

export const deleteAccount = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await userModel.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "Account deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

export const updateAccount = async ( req, res) => {
    try {
        console.log(req.body);
        const { id } = req.params;
        
        console.log(id)
        const updatedUser = await userModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "Account updated successfully", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(id).select('-password');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await userModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};
