import * as yup from "yup";

const userSchema = yup
  .object({
    username: yup.string().min(3, "Your first name should be at least 3 characters.").max(10, "Your first name cannot be longer than 10 characters.").required("Please enter your first name"),
    email: yup.number().min(18, "Your age must be 18 or higher").max(100, "Your age must be 100 or lower").typeError("Your age must be a number"),
    avatar: yup.url(),
    password: yup.string(),
  })
  .required();
