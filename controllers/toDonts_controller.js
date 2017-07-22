const express = require('express');
const router = express.Router();
const toDonts = require('../models/data')

router.get('/', (req, res) => {
    res.render('../views/index', {
        toDonts: toDonts.seededToDonts
    });
});

router.get('/new', (req, res) => {
    res.render('../views/new')
});

router.get('/:id', (req, res) => {
    const id = req.params.id
    const toDont = toDonts.seededToDonts[id];
    res.render('../views/show', {
        toDont: toDont,
    })
});

router.post('/', (req, res) => {
    console.log(req.body)
    const newtoDont = {
        description: req.body.description,
        urgent: req.body.urgent
    }
    toDonts.seededToDonts.push(newtoDont);
    res.redirect('/toDonts');
});




module.exports = router;