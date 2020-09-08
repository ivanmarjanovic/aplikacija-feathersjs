// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const { setField } = require('feathers-authentication-hooks');

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    app.service('komentari').before({
      remove: [
        setField({
          from: 'params.user._id',
          as: 'params.query.userId'
        })
      ]
    });

    return context;
  };
};
