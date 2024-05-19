import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  lastName: yup.string().required("Lastname is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must be at most 12 characters")
    .required("Password is required"),
});
