import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Email must be in format: email@domain.com")
    .min(6, "Minimal email length is 6 symbols")
    .max(32, "Max email length is 32 symbols")
    .required("Email is required"),
  name: yup
    .string()
    .trim()
    .min(3, "Minimal name length is 3 symbols")
    .max(32, "Max name length is 32 symbols")
    .required("Name is required"),
  phone: yup
    .string()
    .trim()
    .min(14, "Minimal phone length is 14 symbols")
    .max(14, "Max phone length is 14 symbols")
    .required("Phone is required"),
  newsletter: yup.boolean().oneOf([true], "Checkbox must be checked"),
});
