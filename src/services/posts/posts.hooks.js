const { authenticate } = require('@feathersjs/authentication').hooks;

const userAndAdmin = require('../../hooks/user-and-admin');

const processPost = require('../../hooks/process-post');


const wordCount = require('../../hooks/word-count');


module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [processPost()],
    update: [userAndAdmin],
    patch: [userAndAdmin],
    remove: [userAndAdmin()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [wordCount()],
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
