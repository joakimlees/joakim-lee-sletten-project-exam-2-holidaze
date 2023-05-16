import * as yup from "yup";

export const userSchema = yup
  .object({
    name: yup.string().min(3, "Your username should be at least 3 characters.").max(12, "Your username cannot be longer than 12 characters.").required("Please enter a username"),
    email: yup.string().email("You must enter a valid email address").required("Please enter your email address"),
    avatar: yup.string().url("avatar must be a valid url").optional(),
    password: yup.string().min(5, "Your password should be at least 5 characters.").max(15, "Your password cannot be longer than 15 characters.").required("Please enter a password"),
    venueManager: yup.boolean().optional().oneOf([true, false], "Please select if you intend to use Holidaze as a customer or as a manager"),
  })
  .required();
