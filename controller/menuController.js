const menu = require("../models/menu_items");
const { v4: uuidv4 } = require("uuid");

exports.createMenu = async (req, res) => {
    try {
        const { name, Description, StoreEmail, price } = req.body;

        const menuExist = await menu.findOne({ where: { StoreEmail: StoreEmail } })
        if (menuExist) {
            return res.status(400).json("menu already exists")
        }
        const newMenu = await menu.create({
            id: uuidv4(),
            name,
            Description,
            StoreEmail,
            price
        });
        res.status(201).json({
            message: "new menu created successfully",
            data: newMenu
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            error: error.message
        })
    }
}

exports.getAll = async (req, res) => {
    try {
        const findMenu = await menu.findAll();
        res.status(200).json({
            message: "these are all the menu available",
            data: findMenu
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            error: error.message
        })
    }
}

exports.getOne = async(req,res) => {
    try {
        const {id} = req.params
        const oneMenu = await menu.findByPk(id);
        if (!oneMenu) {
            return res.status(404).json("menu not found")
        }

        res.status(200).json({
            message:"menu found",
            data:oneMenu
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            error: error
        })
    }
}
exports.updateMenu = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedMenu = await menu.findByPk(id);
        if (!updatedMenu) {
            return res.status(404).json("menu not found");
        }

        const { Description, price } = req.body;
        const newMenu = await updatedMenu.update({ Description, price });

        res.status(200).json({
            message: "menu updated",
            data: newMenu
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteMenu = async (req, res) => {
    try {
        // Get id from params
        const {id} = req.params;
        const menuById = await menu.findByPk(id);

        if (!menuById) {
            res.status(404).json({
                message: 'menu Not Found'
            });
        } else {
            await menu.destroy({ where: { id: id } });
            // Send a success response
            res.status(200).json({
                message: 'menu Deleted successfully'
            });
        }

    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            error:errors.message
        });
    }
};























// const menu = require("../models/menu_items");
// const { v4: uuidv4 } = require("uuid");

// const createMenu = async (req, res) => {
//     try {
//         const { name, Description, StoreEmail, price } = req.body;
//         const id = uuidv4(); // Generate a unique ID

//         // Your logic to create a new menu item
//         const newMenuItem = {
//             id,
//             name,
//             Description,
//             StoreEmail,
//             price
//         };

//         // Save the new menu item to the database (pseudo-code)
//         await menu.create(newMenuItem);

//         res.status(201).json({
//             message: "Menu item created successfully",
//             data: newMenuItem
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: "internal server error",
//             error: error.message
//         });
//     }
// };
