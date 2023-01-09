import * as yup from "yup";

export const createUserSerializer = yup.object().shape({
  name: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  rememberMe: yup.boolean().notRequired(),
});
