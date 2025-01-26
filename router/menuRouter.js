const { createMenu, getAll, getOne, updateMenu, deleteMenu } = require("../controller/menuController");


const router = require("express").Router();

router.post("/menu", createMenu);

router.get("/menu", getAll);

router.get("/menu", getOne);

router.put("/menu/:id", updateMenu);

router.delete("/menu/:id", deleteMenu);


module.exports = router;