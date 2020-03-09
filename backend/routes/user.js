const express = require('express');
const User = require('../models/User');
const { requireJWT } = require('../middleware/auth');

const router = new express.Router();

//find all
router.get('/user', requireJWT, (req, res) => {
  User.find()
    .then(user => {
      res.json(user);
    })
    .catch(error => {
      res.json({ error });
    });
});

router.get('/user/image/upload/:path', (req, res) => { 
  res.download(`../backend/upload/${req.params.path}`)
})

//find user By id
router.get('/user/:id', requireJWT, (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(error => {
      res.json({ error });
    });
});



module.exports = router;