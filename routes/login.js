const express = require('express');
const fs = require('fs');
const path = require('path');
const router = router.express();


router.get('/login', (req, res) => {
    fs.readFile('../data/data.json', 'utf-8', (err, data) => {
        res.send(data)
    })
})

router.post('/login', )