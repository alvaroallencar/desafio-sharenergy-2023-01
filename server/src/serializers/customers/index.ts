import * as yup from "yup";

export const createCustomerSerializer = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  address: yup
    .object()
    .shape({
      streetOrAvenue: yup.string().required(),
      city: yup.string().required(),
      state: yup.string().required(),
      zipCode: yup.string().required(),
      country: yup.string().required(),
    })
    .required(),
  cpf: yup.string().required(),
});

export const updateCustomerSerializer = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  phone: yup.string().notRequired(),
  address: yup
    .object()
    .shape({
      streetOrAvenue: yup.string().notRequired(),
      city: yup.string().notRequired(),
      state: yup.string().notRequired(),
      zipCode: yup.string().notRequired(),
      country: yup.string().notRequired(),
    })
    .notRequired(),
  cpf: yup.string().notRequired(),
});
