const order = require("../models/orders")
const menu = require('../models/menu_items');
const { v4: uuidv4 } = require("uuid")

exports.createOrder = async (req, res) => {
    try {
        const { menuId } = req.params;
        const { orderName, quantity, total } = req.body;
        const menuExists = await menu.findOne({ where: { id: menuId } });
        if (!menuExists) {
            return res.status(404).json({
                message: `menu Not found`
            });
        };

        const newOrder = await order.create({
            id: uuidv4(),
            menuId,
            orderName,
            quantity,
            total
        });
        res.status(201).json({
            message: 'Product created successfully',
            data: newOrder
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        })
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        const allOrders = await order.findAll();
        // Send a success response 
        res.status(200).json({
            message: 'All orders',
            data: allOrders
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error: ',
            error: error.message
        })
    }
}

exports.getAllOrdersByMenu = async (req, res) => {
    try {
        const {menuId} = req.params
        const allOrders = await order.findAll({ where: { menuId:menuId } });
        res.status(200).json({
            message: 'All orders in a particular menu',
            data: allOrders
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        })
    }
}

exports.updateOrder = async (req, res) => {
    try {
        const {id} = req.params;
        const oneOrder = await order.findByPk(id);
        if (!oneOrder) {
            return res.status(404).json("order not found");
        }

        const {quantity, total} = req.body;
        const updatedOrder = await oneOrder.update({ quantity, total });

        res.status(200).json({
            message: "order updated",
            data: updatedOrder
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const {id} = req.params;
        const oneOrder = await order.findByPk(id);
        if (!oneOrder) {
            return res.status(404).json("order not found");
        }

        oneOrder.destroy()

        res.status(200).json("order deleted");

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
