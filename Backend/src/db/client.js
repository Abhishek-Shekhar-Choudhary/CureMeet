require('dotenv').config
const mongoose = require('mongoose');

const connectionString = () => {

    let connectionUri;

    if (process.env.NODE_ENV === 'development') {
        connectionUri = process.env.DATABASE_LOCAL
        connectionUri = connectionUri.replace('<username>', process.env.DB_USER)
        connectionUri = connectionUri.replace('<password>', process.env.DB_PASS)
    } else {
        connectionUri = process.env.DATABASE_PROD
        connectionUri = connectionUri.replace('<username>', process.env.DB_USER)
        connectionUri = connectionUri.replace('<password>', process.env.DB_PASS)
    }
    return connectionUri
}

const uri = connectionString()

const clientDB = async () => {
    await mongoose.connect(uri, { dbName: process.env.DB_NAME })
}

module.exports = clientDB

