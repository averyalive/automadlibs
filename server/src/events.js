const express = require('express');

var db;

function createRouter(db) {
  const router = express.Router();
  this.db = db;

  // define routes here
  router.get('/api', (req, res) => { getApi(req, res); });
  router.get('/api/word/random', (req, res) => { getRandomWord(req, res); });


  return router;
}

function getApi(req, res) {
  res
    .status(200)
    .json({ message: 'Automadlibs Server API (connected)'});
}

function getRandomWord(req, res) {
  res.status(501).json({ message: 'Not Implemented' });
}

function createMadlib(req, res) {
  res.status(501).json({ message: 'Not Implemented' });
}

module.exports = createRouter;