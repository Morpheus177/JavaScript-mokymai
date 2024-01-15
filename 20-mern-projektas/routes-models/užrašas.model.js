const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const užrašasSchema = new Schema({
    pavadinimas: { type: String, required: true },
    turinys: { type: String, required: true }
});

const Užrašas = mongoose.model('Užrašas', užrašasSchema);

module.exports = Užrašas;
