// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const feathers = require('@feathersjs/feathers');
const memory = require('feathers-memory');
const checkPermissions = require('feathers-permissions');
const app = feathers();

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    app.use('/komentari', memory());

  app.service('komentari').hooks({
  before: checkPermissions({
    roles: [ 'admin' ]
  })
  });

  // User from the database
  const user = {
  username: 'Nikola1',
  email: 'nikolakili@kili.com',
  permissions: [ 'admin' ]
  }

    return context;
  };
};
