#!/bin/bash

echo Starting server with 'node server/index.js'
node server/src/index.js

echo Start client with 'ng serve'
cd client
ng serve
