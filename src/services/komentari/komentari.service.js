// Initializes the `komentari` service on path `/komentari`
const { Komentari } = require('./komentari.class');
const createModel = require('../../models/komentari.model');
const hooks = require('./komentari.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/komentari', new Komentari(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('komentari');

  service.hooks(hooks);
};
