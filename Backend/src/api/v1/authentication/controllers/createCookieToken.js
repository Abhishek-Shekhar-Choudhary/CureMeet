const jwt = require('jsonwebtoken')
require('dotenv').config()

const createCookieToken = async (req, res, next) => {
    const user = req.body
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '72hr' })

    res.cookie('token', token, {
        httpOnly: false, // false
        secure: true,
        sameSite: 'none'
    }).send({ token: token })
};

module.exports = createCookieToken;