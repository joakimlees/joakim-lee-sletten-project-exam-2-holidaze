import { FormField } from "../../../../form/FormField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { API_HOLIDAZE_URL } from "../../../../../api/constants";
import { createVenueSchema } from "../../../../form/schema/createVenueSchema";
import { ButtonPrimary } from "../../../../ui/actions/buttons/ButtonPrimary";
import { useAuthPost } from "../../../../../api/auth/useAuthPost";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function EditVenue() {
  const { id } = useParams();
  const [isVenueUpdated, setIsVenueUpdated] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createVenueSchema),
  });

  const { data, loading, error, postWithAuth } = useAuthPost();

  async function onSubmit(data, event) {
    const form = event.target;
    const action = new URL(form.action);
    const path = action.pathname;
    const method = "put";
    const url = API_HOLIDAZE_URL + path + "/" + id;
    const body = JSON.stringify(data);

    await postWithAuth(url, {
      method,
      body,
    });
  }

  useEffect(() => {
    if (data && !error) {
      setIsVenueUpdated(true);
    }
  }, [data, error]);

  return (
    <main className="grow">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
        <h1 className="font-headings font-bold text-xl text-center text-primary my-10">Edit venue</h1>
        <form className="bg-light py-16 px-10 rounded-lg max-w-xs mx-auto mt-10 mb-20" onSubmit={handleSubmit(onSubmit)} method={"put"} action={"/venues"}>
          <FormField register={register} labelText="Venue Name" htmlFor="name" name="name" type="text" placeholder="Name of your venue" required={true} errorText={errors.name?.message} />

          <FormField register={register} labelText="Description" htmlFor="description" name="description" type="textarea" placeholder="description of your venue or other details" required={true} errorText={errors.description?.message} />

          <FormField register={register} labelText="Media image (URL)" htmlFor="media" name="media" type="url" placeholder="enter a image url" required={false} errorText={errors.media?.message} />

          <FormField register={register} labelText="Price" htmlFor="price" name="price" type="number" placeholder="example: 199" required={true} errorText={errors.price?.message} />

          <FormField register={register} labelText="Guest limit" htmlFor="maxGuests" name="maxGuests" type="number" placeholder="example: 4" required={true} errorText={errors.maxGuests?.message} />

          <FormField register={register} labelText="Address" htmlFor="address" name="location.address" type="text" placeholder="venue street" required={true} errorText={errors.address?.message} />

          <FormField register={register} labelText="City" htmlFor="city" name="location.city" type="text" placeholder="Oslo" required={false} errorText={errors.city?.message} />

          <FormField register={register} labelText="Zip" htmlFor="zip" name="location.zip" type="text" placeholder="zip" required={false} errorText={errors.zip?.message} />

          <FormField register={register} labelText="Country" htmlFor="country" name="location.country" type="text" placeholder="Norway" required={true} errorText={errors.country?.message} />

          <FormField register={register} labelText="Continent" htmlFor="continent" name="location.continent" type="text" placeholder="Europe" required={false} errorText={errors.continent?.message} />

          <div className="flex justify-between mb-8">
            <FormField register={register} errorText={errors.wifi?.message} labelText="wifi" htmlFor="wifi" name="meta.wifi" type="checkbox" required={false} />

            <FormField register={register} errorText={errors.parking?.message} labelText="parking" htmlFor="parking" name="meta.parking" type="checkbox" required={false} />

            <FormField register={register} errorText={errors.breakfast?.message} labelText="breakfast" htmlFor="breakfast" name="meta.breakfast" type="checkbox" required={false} />

            <FormField register={register} errorText={errors.pets?.message} labelText="pets" htmlFor="breakfast" name="meta.pets" type="checkbox" required={false} />
          </div>
          {error ? <div className="block text-center text-secondary">Unable to update your venue</div> : <div></div>}
          {loading ? <div className="block text-center text-dark">Updating venue...</div> : <div></div>}
          {isVenueUpdated ? <div className="block text-center text-primary">Your venue was updated. view your venues in the venue Manager</div> : <div></div>}
          <ButtonPrimary type="submit" innerContent="Update venue" />
        </form>
      </div>
    </main>
  );
}
