'use strict';

const express = require('express');
const knex = require('../../knex');

const router = express.Router();


router.get('/:user_id', (req, res, next) => {
  knex('june_arts')
  .select()
  .where('user_id', req.params.user_id)
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});


module.exports = router;
