const express = require('express');
const router = express.Router();

const Note = require('../models/note');
const note = require('../controllers/note');

router.param('id', (req, res, next, id) => {
  Note.findById(id, (err, note) => {
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
router.get('/notes', note.index);
router.get('/notes/new', note.newNote);
router.get('/notes/:id', note.show);
router.get('/notes/:id/edit', note.edit);
router.put('/notes/:id', note.update);
router.delete('/notes/:id', note.destroy);
router.post('/notes', note.create);

module.exports = router;
