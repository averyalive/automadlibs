const express = require('express');

function createRouter(db) {
  const router = express.Router();

  // define routes here

  router.get('/api', (req, res, next) => {
    res
      .status(200)
      .json({ message: 'Automadlibs Server API (connected)'});
  });

  return router;
}

module.exports = createRouter;