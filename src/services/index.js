const messages = require('./messages/messages.service.js');
const users = require('./users/users.service.js');
const posts = require('./posts/posts.service.js');
const komentari = require('./komentari/komentari.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(messages);
  app.configure(users);
  app.configure(posts);
  app.configure(komentari);
};
