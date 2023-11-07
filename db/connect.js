const mongoose = require('mongoose')


const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "03-TASK-MANAGER"
    })
}

module.exports = connectDB