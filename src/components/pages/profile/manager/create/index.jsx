import { FormField } from "../../../../form/FormField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { API_HOLIDAZE_URL } from "../../../../../api/constants";
import { createVenueSchema } from "../../../../form/schema/createVenueSchema";

export function CreateVenue() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createVenueSchema),
  });

  return (
    <main className="grow">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
        <h1 className="font-headings font-bold text-xl text-center text-primary my-10">Venue Create</h1>
        <form className="bg-light py-16 px-10 rounded-lg max-w-xs mx-auto mt-10 mb-20" method={"post"} action={""}>
          <FormField register={register} labelText="Venue Name" htmlFor="name" name="name" type="text" placeholder="Name of your venue" required={true} errorText={errors.name?.message} />
        </form>
      </div>
    </main>
  );
}
