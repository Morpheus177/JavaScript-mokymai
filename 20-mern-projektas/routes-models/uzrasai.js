const express = require('express');
const router = express.Router();
const Užrašas = require('../models/užrašas.model');

// Gauk visus užrašus
router.route('/').get((req, res) => {
    Užrašas.find()
        .then(užrašai => res.json(užrašai))
        .catch(err => res.status(400).json(`Klaida: ${err}`));
});

// Gauk vieną užrašą pagal ID
router.route('/:id').get((req, res) => {
    Užrašas.findById(req.params.id)
        .then(užrašas => res.json(užrašas))
        .catch(err => res.status(400).json(`Klaida: ${err}`));
});

// Pridėk naują užrašą
router.route('/pridėti').post((req, res) => {
    const naujasUžrašas = new Užrašas({
        pavadinimas: req.body.pavadinimas,
        turinys: req.body.turinys
    });

    naujasUžrašas.save()
        .then(() => res.json('Užrašas pridėtas!'))
        .catch(err => res.status(400).json(`Klaida: ${err}`));
});

module.exports = router;
