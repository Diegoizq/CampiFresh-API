const mongoose = require ('mongoose')
require ('dotenv').config()

const connectDB = async ()=> {
    try {
        let mongoURI = process.env.MONGO_DB
        await mongoose.connect(mongoURI)
        console.log("conectado perrito");
        

    } catch (error) {
        console.log("error al conectarse a la base de datos");
        
        
    }
}

module.exports = connectDB