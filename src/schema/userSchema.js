import * as yup from 'yup';

const schema = {
  store: {
    body: yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required(),
    }).noUnknown(),
  },
  update: {
    body: yup.object().shape({
      name: yup.string(),
      email: yup.string().email(),
    }).noUnknown(),
  },
};

export default schema;
