const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Joãozinho',
          email: 'joãozinho@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),

        },
        {
          name: 'Joãozinho 2',
          email: 'joãozinho2@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),

        },
        {
          name: 'Joãozinho 3',
          email: 'joãozinho3@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),

        },
      ],
      {},
    );
  },

  async down() {},
};
