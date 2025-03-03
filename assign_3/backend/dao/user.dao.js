const { Error } = require("mongoose");
const { user } = require("../model/users.model");

const createUserDao = async (userData) => {
    console.log(userData, "usedata")
    try {
        const user = await user.create(userData);
        console.log(userData, "created");
        return user
    } catch (error) {
        throw new Error(error.message)
    }  
};

module.exports = {
    createUserDao
}