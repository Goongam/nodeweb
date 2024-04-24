const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
    res.send('user');
})

router.get('/user/:id', (req , res) => {
    const id = req.params.id;
    res.send(id);
})

module.exports = router;