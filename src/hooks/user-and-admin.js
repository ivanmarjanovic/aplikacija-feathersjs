// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const { Forbidden } = require('@feathersjs/errors');

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    
    /*const restrictUser =*/ async context => {
    const { user } = context.params;
    
    if(user.roles.includes('admin')) {
    return context;
    }
    if(!context.id) {
    context.params.query._id = user._id;
    } else {
    const item = await context.service.get(context.userId);
    if(item.userId !== user._id) {
    throw new Forbidden('You are not allowed to access this');
    }
    }
    
    return context;
    };
  };
};

// const { Forbidden } = require('@feathersjs/errors'); 
// module.exports = (options = {}) => {
//   return async context => {   
//           const { user } = context.params;
          
//           if(user.roles.includes('admin') || data.params.userId.equals(user.params.userId) {
//             // return context;
//           }
//           const { data } = context;
//           if (!context.id) {
//             context.params.query._id = user._id
//           }else {
//             const post = await context.service.get(context.user_Id);
//             if(post.userId !== user._id) {
//             throw new Forbidden('You are not allowed to access this');
//             }
//           }
//           return context;
//   };
// };