const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/psicored'

async function conectar() {
    try {
        await mongoose.connect(MONGO_URI)
        console.log('Conectado a MongoDB:', MONGO_URI)
    } catch (err) {
        console.error('Error conectando a MongoDB:', err.message)
        process.exit(1)
    }
}

function desconectar() {
    return mongoose.disconnect()
}

module.exports = { conectar, desconectar }