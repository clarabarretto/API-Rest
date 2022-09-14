const User = require('../models/User').default;

module.exports = {
  index: async () => User.findAll({
    attributes: ['id', 'name', 'email'],
  }),

  show: (filter) => User.findByPk(filter, {
    attributes: ['id', 'name', 'email'],
  }),

  store: async (data) => {
    const newUser = await User.create(data);
    const { id, name, email } = newUser;
    return { id, name, email };
  },

  delete: async (filter) => {
    const user = await User.findByPk(filter);

    if (!user) {
      throw new Error('user does not exist ');
    }

    await user.destroy();
    return { deleted: user };
  },

  update: async (filter, data) => {
    const user = await User.findByPk(filter);

    if (!user) {
      throw new Error('user does not exist ');
    }

    const newData = await user.update(data);

    const { id, name, email } = newData;

    return { id, name, email };
  },
};
