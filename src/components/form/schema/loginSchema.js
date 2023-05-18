import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup.string().email("You must enter a valid email address").required("Please enter your email address"),
    password: yup.string().min(5, "Your password should be at least 5 characters.").max(15, "Your password cannot be longer than 15 characters.").required("Please enter a password"),
  })
  .required();
