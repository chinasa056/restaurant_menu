const { createOrder, getAllOrders, getAllOrdersByMenu, updateOrder, deleteOrder } = require("../controller/orderController");

const router = require("express").Router();

router.post("/order/:menuId", createOrder)
router.get("/order", getAllOrders)
router.get("/order/:id", getAllOrdersByMenu)
router.put("/order/:id", updateOrder)
router.delete("/order/:id", deleteOrder)





module.exports = router