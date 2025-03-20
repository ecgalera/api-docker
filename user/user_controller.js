const User = require("./user_register_login.js");

// Post user createUserLogin
const createUserLogin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = new User({ email, password });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createUserLogin
}