import { FormField } from "../../../form/FormField";
import { ButtonPrimary } from "../../../ui/actions/buttons/ButtonPrimary";
import { useForm } from "react-hook-form";
import { userSchema } from "../../../form/schema/userSchema";
import { yupResolver } from "@hookform/resolvers/yup";
//import { useRegister } from "../../../../api/useRegister";
import { API_HOLIDAZE_URL } from "../../../../api/constants";
import { useState } from "react";

export function Register() {
  const [profile, setProfile] = useState();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  async function onSubmit(data, event) {
    const form = event.target;
    const action = new URL(form.action);
    const path = action.pathname;
    const method = form.method;
    const url = API_HOLIDAZE_URL + path;
    const body = JSON.stringify(data);

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });

      if (!response.ok) {
        // Handle HTTP errors
        const result = await response.json();
        throw new Error("Request failed with status " + result.errors[0].message);
      }

      const result = await response.json();

      setProfile(result);
      console.log(profile);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="grow">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
        <h1 className="text-center mt-20 font-headings text-2xl text-dark">Register</h1>
        <form className="bg-light py-16 px-10 rounded-lg max-w-xs mx-auto mt-10 mb-20" method={"post"} action={"/auth/register"} onSubmit={handleSubmit(onSubmit)}>
          <FormField register={register} labelText="Username" htmlFor="name" name="name" type="text" placeholder="dinDjarin123" required={true} errorText={errors.name?.message} />

          <FormField register={register} labelText="Email" htmlFor="email" name="email" type="email" placeholder="example@stud.noroff.no" required={true} errorText={errors.email?.message} />

          <FormField register={register} errorText={errors.avatar?.message} labelText="Avatar" htmlFor="avatar" name="avatar" type="url" placeholder="imageUrl.no" required={false} />

          <FormField register={register} errorText={errors.password?.message} labelText="Password" htmlFor="password" name="password" type="password" placeholder="Choose a password..." required={true} />

          <div className="flex justify-between mb-8">
            <FormField register={register} errorText={errors.role?.message} labelText="Customer" htmlFor="roleCustomer" name="venueManager" value={false} type="radio" required={true} />

            <FormField register={register} errorText={errors.venueManager?.message} labelText="Manager" htmlFor="roleManager" name="venueManager" value={true} type="radio" required={true} />
          </div>

          <ButtonPrimary type="submit" innerContent="Register now" />
        </form>
      </div>
    </main>
  );
}
