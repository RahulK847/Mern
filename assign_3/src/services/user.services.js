const { createUserDao } = require ("../dao/users.dao")

const createNewUserService = async (userData) => {
    try {
        const user = await createUserDao(userData);
        return{
            success: true,
            data: user
        };
    } catch (error){
        return {
            success: false,
            error: error.message
        };
    }
};