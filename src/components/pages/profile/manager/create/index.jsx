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

          <FormField register={register} labelText="Description" htmlFor="description" name="description" type="textarea" placeholder="description of your venue or other details" required={true} errorText={errors.description?.message} />

          <FormField register={register} labelText="Media image (URL)" htmlFor="media" name="media" type="url" placeholder="enter a image url" required={false} errorText={errors.media?.message} />

          <FormField register={register} labelText="Price" htmlFor="price" name="price" type="number" placeholder="example: 199" required={true} errorText={errors.price?.message} />

          <FormField register={register} labelText="Guest limit" htmlFor="maxGuests" name="maxGuests" type="number" placeholder="example: 4" required={true} errorText={errors.maxGuests?.message} />

          <FormField register={register} labelText="Address" htmlFor="address" name="address" type="text" placeholder="venue street" required={true} errorText={errors.address?.message} />

          <FormField register={register} labelText="City" htmlFor="city" name="city" type="text" placeholder="Oslo" required={false} errorText={errors.city?.message} />

          <FormField register={register} labelText="Zip" htmlFor="zip" name="zip" type="text" placeholder="zip" required={false} errorText={errors.zip?.message} />

          <FormField register={register} labelText="Country" htmlFor="country" name="country" type="text" placeholder="Norway" required={true} errorText={errors.country?.message} />

          <FormField register={register} labelText="Continent" htmlFor="continent" name="continent" type="text" placeholder="Europe" required={true} errorText={errors.continent?.message} />

          <div className="flex justify-between mb-8">
            <FormField register={register} errorText={errors.wifi?.message} labelText="wifi" htmlFor="wifi" name="wifi" value={false} type="checkbox" required={true} />

            <FormField register={register} errorText={errors.parking?.message} labelText="parking" htmlFor="parking" name="parking" value={false} type="checkbox" required={true} />

            <FormField register={register} errorText={errors.breakfast?.message} labelText="breakfast" htmlFor="breakfast" name="breakfast" value={false} type="checkbox" required={true} />

            <FormField register={register} errorText={errors.pets?.message} labelText="pets" htmlFor="breakfast" name="pets" value={false} type="checkbox" required={true} />
          </div>
        </form>
      </div>
    </main>
  );
}
