const Student = require('../models/Student').default;
const Photo = require('../models/Photo').default;

module.exports = {
  index: async () => Student.findAll({
    attributes: ['id', 'name', 'last_name', 'email', 'age', 'weight', 'height'],
    order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
    include: {
      model: Photo,
      attributes: ['url', 'filename'],
    },
  }),

  show: async (id) => {
    const student = await Student.findByPk(id, {
      attributes: ['id', 'name', 'last_name', 'email', 'age', 'weight', 'height'],
      order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
      include: {
        model: Photo,
        attributes: ['url', 'filename'],
      },
    });
    return student;
  },

  store: async (data) => Student.create(data),

  delete: async (id) => {
    const student = await Student.findByPk(id);

    if (!student) {
      throw new Error('student does not exist ');
    }

    await student.destroy();
    return { deleted: student };
  },

  update: async (filter, data) => {
    const { id } = filter;
    const student = await Student.findByPk(id);

    if (!student) {
      throw new Error('student does not exist ');
    }
    await student.update(data);
    return { updated: student };
  },
};
