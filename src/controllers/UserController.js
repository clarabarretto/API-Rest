import userService from '../services/userService';

class UserController {
  async store(req, res) {
    try {
      const newUser = await userService.store(req.data);
      return res.json(newUser);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await userService.index();
      return res.json(users);
    } catch (e) {
      return res.json(e);
    }
  }

  // show
  async show(req, res) {
    try {
      const user = await userService.show(req.userId);
      return res.json(user);
    } catch (e) {
      return res.json(e);
    }
  }

  // update
  async update(req, res) {
    try {
      const updatedUser = await userService.update(req.userId, req.data);

      return res.json(updatedUser);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  // delete
  async delete(req, res) {
    try {
      const user = await userService.delete(req.filter);
      return res.json(user);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}

export default new UserController();
