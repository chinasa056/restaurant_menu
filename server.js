const express = require("express");
const port = 2112;
const sequelize = require("./sequelize")

const app = express();
app.use(express.json());

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
