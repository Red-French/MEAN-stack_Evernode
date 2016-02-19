'use strict';

const Note = require('../models/note');
const Category = require('../models/category');

module.exports = {
  edit (req, res) {
    res.render('new-note', {note: req.note});
  },

  update (req, res) {
    req.note.update(req.body, (err) => {
      if (err) throw err;

      res.redirect(`/notes/${req.note._id}`);
    });
  },

  index (req, res) {
    Note.find({}, (err, notes) => {
      if (err) throw err;

      res.render('notes-index', {notes: notes});
    });
  },

  newNote (req, res) {
    Category.find({}, (err, categories) => {
      if (err) throw err;

    res.render('new-note', {
      categories: categories
    });
  });
  },

  show (req, res) {
    res.render('show-note', {note: req.note});
  },

  create (req, res) {
    Note.create(req.body, (err, note) => {
      if (err) throw err;

      res.redirect(`/notes/${note._id}`);
    });
  },

  destroy (req, res) {
    req.note.remove((err) => {
      if (err) throw err;

      res.redirect('/notes');
    });
  }
};
