import * as yup from "yup";

export const editAvatarSchema = yup
  .object({
    avatar: yup.string().url("avatar must be a valid url").optional(),
  })
  .required();
