import * as yup from "yup";

export const createVenueSchema = yup
  .object({
    name: yup.string().min(3, "Name should be at least 3 characters.").max(20, "Name cannot be longer than 15 characters.").required("Please provide a name for your venue"),
    description: yup.string().min(5, "Description should be at least 5 characters.").max(20, "Name cannot be longer than 15 characters."),
    media: yup.array().of(yup.string().url("Media must be a valid URL")),
    price: yup.number().required("Please provide a price for your venue"),
    maxGuests: yup.number().required("Please provide a guest limit for your venue"),
    rating: yup.number(),
    meta: yup.object().shape({
      wifi: yup.boolean().optional().oneOf([true, false], "do your venue have wifi?"),
      parking: yup.boolean().optional().oneOf([true, false], "do your venue include parking?"),
      breakfast: yup.boolean().optional().oneOf([true, false], "do your venue offer included breakfast?"),
      pets: yup.boolean().optional().oneOf([true, false], "is pets allowed in your venue?"),
    }),
    location: yup.object().shape({
      address: yup.string().required("Please enter the address to your venue"),
      city: yup.string(),
      zip: yup.string(),
      country: yup.string().required("In what country are your venue located?"),
      continent: yup.string(),
    }),
  })
  .required();
