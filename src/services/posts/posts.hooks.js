const { authenticate } = require('@feathersjs/authentication').hooks;

// const processPost = require('../../hooks/process-post');

// const wordCount = require('../../hooks/word-count');

const { Forbidden } = require('@feathersjs/errors');

const debugHook = function (hook) {
  console.log(hook);
}

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [wordCountAndUserId],
    update: [userAndAdmin],
    patch: [userAndAdmin],
    remove: [userAndAdmin]
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

async function userAndAdmin(context) {   
  try {const user = context.params.user;
  const data = context.data;
  console.log('user je ' + JSON.stringify(user));
  console.log('data je ' + JSON.stringify(data));
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


  function wordCountAndUserId (context) {
    const { data } = context;
    const text = data.text;
    const { user } = context.params;

    if(!data.text) {
      throw new Error('A message must have a text');
    }

    function wordCounting(str) { 
      return str.split(" ").length;
    };

    const wc = wordCounting(text);

    context.data = {
      text,
      word_count: wc,
      userId: user._id 
    };

    return context;}
