require('dotenv').config()
const { conectar, desconectar } = require('./index')
const profesional = require('./models/profesional')

const datos = [
    {
        nombre: 'Dr. Camargo',
        especialidad: 'Ansiedad',
        matricula: 'MP-4821',
        email: 'camargo@psicored.com',
        telefono: '+54 9 11 3344-5566'
    },
    {
        nombre: 'Lic. Sandoval',
        especialidad: 'Psicología Infantil',
        matricula: 'MP-3317',
        email: 'sandoval@psicored.com',
        telefono: '+54 9 11 2233-4455'
    },
    {
        nombre: 'Dra. Inostroza',
        especialidad: 'Depresión',
        matricula: 'MP-5590',
        email: 'inostroza@psicored.com',
        telefono: '+54 9 11 5566-7788'
    }
]

async function seed() {
    await conectar()
    await profesional.deleteMany({})
    await profesional.insertMany(datos)
    console.log('Seed completado:', datos.length, 'profesionales insertados')
    await desconectar()
}

seed()
