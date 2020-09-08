const { authenticate } = require('@feathersjs/authentication').hooks;



const restrtownKomentari = require('../../hooks/restrtown-komentari');



const adminKomentari = require('../../hooks/admin-komentari');



module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [],
    update: [restrtownKomentari(), adminKomentari()],
    patch: [restrtownKomentari(), adminKomentari()],
    remove: [restrtownKomentari(), adminKomentari()]
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
