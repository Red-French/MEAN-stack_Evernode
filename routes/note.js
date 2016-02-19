'use strict';

const express = require('express');
const router = express.Router();  // Router is built-in middleware and routing functions.
                                  // You can add HTTP method routes (verbs) to it.

const Note = require('../models/note');

const ctrl = require('../controllers/note');

router.param('id', (req, res, next, id) => {
  Note
    .findById(id)
    .populate('category')
    .exec((err, note) => {
      if (err) throw err;

      req.note = note;
      next();
    });
});

// ROUTES (in general, the routing order does not matter; 
  //one exception: if you're using a route parameter, i.e. ':id')
  // so route parameter should come afterwards or, for example,
  // /notes/new would trigger /notes/:id if /notes/:id were
  // first in the waterfall
router.get('/', ctrl.index);
router.get('/notes', ctrl.index);  // when '/notes' use 'controller/note.index'
router.get('/notes/new', ctrl.newNote);  // when '/notes/new' use
router.post('/notes', ctrl.create);
router.get('/notes/:id', ctrl.show);  // when '/notes/dataIDFromDB' use controller/note.show'
router.get('/notes/:id/edit', ctrl.edit);
router.put('/notes/:id', ctrl.update);
router.delete('/notes/:id', ctrl.destroy);

module.exports = router;
