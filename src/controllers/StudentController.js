import studentService from '../services/studentService';

class StudentController {
  async index(req, res) {
    const students = await studentService.index();
    res.json(students);
  }

  async show(req, res) {
    try {
      const { id } = req.filter;
      const student = await studentService.show(id);
      return res.json(student);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async store(req, res) {
    try {
      const student = await studentService.store(req.data);
      return res.json(student);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const deletedStudent = await studentService.delete(req.filter);
      return res.json(deletedStudent);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const updatedStudent = await studentService.update(req.filter, req.data);

      return res.json(updatedStudent);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new StudentController();
