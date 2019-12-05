const express = require('express');
const Parser = require('./parser');

var db;
var parser;

function createRouter(db) {
  const router = express.Router();
  this.db = db;
  this.parser = new Parser(db);

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
  this.db.query('SELECT name FROM templates', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({ status: 'error' });
    } else {
      var templates = [];
      for (var row in data) {
        templates.push(data[row]['name']);
      }
      res.status(200).json(templates);
    }
  });
}

function createMadlib(req, res) {
  var selectedTemplate = req.body.template;
  this.db.query('SELECT * FROM templates WHERE name="' + selectedTemplate + '"',
    (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({ status: 'error' });
      } else {
        var templateContents = data[0].contents;
        this.parser.parse(templateContents).then(madlibContents => {
          this.db.query('INSERT INTO madlibs (name, contents) VALUES (?,?)',
          [selectedTemplate, madlibContents],
          (err) => {
            if (err) {
              console.log(err);
              res.status(500).json({ status: 'error' });
            } else {
              res.status(200).json({
                name: selectedTemplate,
                contents: madlibContents,
              });
            }
          })
        });
      }
    });
}

module.exports = createRouter;