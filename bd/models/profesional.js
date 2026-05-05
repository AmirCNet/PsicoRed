const mongoose = require('mongoose')

const profesionalSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    especialidad: { type: String, required: true },
    matricula: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    telefono: { type: String },
    pacientes: { type: Array, ref: 'Paciente' } //Por ahora asi hasta agregar paciente
}, {
    timestamps: true  // Para saber cuando se creo y modifico
})

module.exports = mongoose.model('Profesional', profesionalSchema)
