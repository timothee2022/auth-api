'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const logger = require('./auth/middleware/logger');
const v1Routes = require('./auth/route/v1');
const v2Routes = require('./auth/route/v2');


const errorHandler = require('./error-handlers/500');
const notFound = require('./error-handlers/404');
const authRoutes = require('./auth/routes');


const app = express();
app.use(express.json());


app.use(cors());
app.use(morgan('dev'));
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);

app.use(authRoutes);


app.use('*', notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (PORT) => {
    if (!PORT) { throw new Error('Not Available'); }
    app.listen(PORT, () => {
      console.log(`Server Up on ${PORT}`);
    });
  },
};
