const express = require("express");
const port = 2112;
const sequelize = require("./sequelize");
const router = require("./router/menuRouter");
const orderRouter = require("./router/ordersRouter")

const app = express();
app.use(express.json());
app.use(router);
app.use(orderRouter);

const server = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to database has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
server()
app.listen(port, ()=> {
    console.log(`server is running on pot: ${port}`);
    
})
