const express = require('express');

var db;

function createRouter(db) {
  const router = express.Router();
  this.db = db;

  // define routes here
  router.get('/api', (req, res) => { getApi(req, res) });
  router.get('/api/templates', (req, res) => { getTemplates(req, res) });
  router.post('/api/madlibs', (req, res) => { createMadlib(req, res) });


  return router;
}

function getApi(req, res) {
  res
    .status(200)
    .json({ message: 'Automadlibs Server API (connected)'});
}

function getTemplates(req, res) {
  res
    .status(200)
    .json({
      templates: ['Server Template 1', 'Server Template 2', 'Server Template 3']
    });
}

function createMadlib(req, res) {
  res
    .status(200)
    .json({
      title: req.body.template,
      html: "<p>HTML contents will be parsed server-side.</p>"
    });
}

module.exports = createRouter;