const { authenticate } = require('@feathersjs/authentication').hooks;

const processPost = require('../../hooks/process-post');

const wordCount = require('../../hooks/word-count');

const { Forbidden } = require('@feathersjs/errors');


module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [processPost()],
    update: [userAndAdmin],
    patch: [userAndAdmin],
    remove: [userAndAdmin]
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
async function userAndAdmin(context) {   
  try {const user = context.params.user;
  const data = context.data;
  console.log('user je ' + JSON.stringify(user));
  console.log('date je ' + JSON.stringify(data));
  if(user.roles !== undefined && user.roles.includes('admin')) {
    return context;
  }
  // if(user.roles.includes('admin') || data.params.userId.equals(user.params.userId)) {
  //   return context;
  // }
  
  if (!context.id) {
    throw new Forbidden('Ne moze vise ovako!');
  }else {
    const post = await context.service.get(context.id);
    if(!post.userId.equals(user._id)) {
    throw new Forbidden('You are not allowed to access this');
    }
  }
  return context;}
  catch(error){
    console.log(error.stack);
    throw error;};
};