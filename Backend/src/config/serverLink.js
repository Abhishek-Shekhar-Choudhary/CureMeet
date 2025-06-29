require('dotenv').config()

const server = () => {
    const mode = process.env.NODE_ENV
    if (mode === 'development') {
        return process.env.LOCAL_SERVER
    }
    return process.env.NORMAL_SERVER
}
const serverLink = server()
module.exports = serverLink;