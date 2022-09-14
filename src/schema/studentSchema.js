import * as yup from 'yup';

const schema = {
  store: {
    body: yup.object().shape({
      name: yup.string().required(),
      last_name: yup.string().required(),
      email: yup.string().email().required(),
      age: yup.number().required().positive().integer(),
      weight: yup.number().required().positive(),
      height: yup.number().required().positive(),
    }).noUnknown(),
  },

  show: {
    params: yup.object().shape({
      id: yup.number().required().integer(),
    }).noUnknown(),
  },

  delete: {
    params: yup.object().shape({
      id: yup.number().required().integer(),
    }).noUnknown(),
  },

  update: {
    body: yup.object().shape({
      name: yup.string(),
      last_name: yup.string(),
      email: yup.string().email(),
      age: yup.number().positive().integer(),
      weight: yup.number().positive(),
      height: yup.number().positive(),
    }).noUnknown(),
    params: yup.object().shape({
      id: yup.number().required().integer(),
    }).noUnknown(),
  },
};

export default schema;
