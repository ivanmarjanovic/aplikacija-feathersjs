const { authenticate } = require('@feathersjs/authentication').hooks;

const restrictToOwner = require('../../hooks/restrict-to-owner');



const administrator = require('../../hooks/administrator');



module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [],
    update: [restrictToOwner(), administrator()],
    patch: [restrictToOwner(), administrator()],
    remove: [restrictToOwner(), administrator()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
