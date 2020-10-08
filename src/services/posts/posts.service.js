// Initializes the `posts` service on path `/posts`
const { Posts } = require('./posts.class');
const createModel = require('../../models/posts.model');
const hooks = require('./posts.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/posts', new Posts(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('posts');

  // service.on('created', post => console.log('post created', post));
  // service.on('updated', (post, context) => console.log('post updated', post));
  // service.on('patched', post => console.log('post patched', post));
  // service.on('removed', (post, context) => console.log('post removed', post));
  

  service.hooks(hooks);
};
