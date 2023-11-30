const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ceemalvarezji:lWObYss2o2axenSN@cluster0.fdejcxa.mongodb.net/peliculas-bd?retryWrites=true&w=majority').then(() => console.log('Conexión exitosa a MongoDB')).catch(err => console.log('Error al conectar a MongoDB: ', err));

module.exports = mongoose;
