const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://edrohernandezmo:mNSYnCwpunqxdJFG@cluster0.s4har3o.mongodb.net/movies-db?retryWrites=true&w=majority').then(() => console.log('Conexión exitosa a MongoDB')).catch(err => console.log('Error al conectar a MongoDB: ', err));

module.exports = mongoose;
