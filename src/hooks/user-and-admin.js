// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { Forbidden } = require('@feathersjs/errors');
    const restrictUser = async context => {
    const { user } = context.params;
    // For admin and superadmin allow everything
    if(user.roles.includes('admin') || user.roles.includes('superadmin')) {
    return context;
    }
    if(!context.id) {
    // When requesting multiple, restrict the query to the user
    context.params.query._id = user._id;
    } else {
    // When acessing a single item, check first if the user is an owner
    const item = await context.service.get(context.userId);
    if(item.userId !== user._id) {
    throw new Forbidden('You are not allowed to access this');
    }
    }
    
    return context;
  };
  };
};