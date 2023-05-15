import { FormField } from "../../../form/FormField";
import { ButtonPrimary } from "../../../ui/actions/buttons/ButtonPrimary";
import { useForm } from "react-hook-form";
/*
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
*/
export function Register() {
  const { handleSubmit, register } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <main className="grow">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
        <h1 className="text-center mt-20 font-headings text-2xl text-dark">Register</h1>
        <form className="bg-light py-16 px-10 rounded-lg max-w-xs mx-auto mt-10 mb-20" onSubmit={handleSubmit(onSubmit)}>
          <FormField register={register} labelText="Username" htmlFor="username" name="username" type="text" placeholder="dinDjarin123" required={true} />

          <FormField register={register} labelText="Email" htmlFor="email" name="email" type="email" placeholder="example@stud.noroff.no" required={true} />

          <FormField register={register} labelText="Avatar" htmlFor="avatar" name="avatar" type="url" placeholder="imageUrl.no" required={false} />

          <FormField register={register} labelText="Password" htmlFor="password" name="password" type="password" placeholder="Choose a password..." required={true} />

          <div className="flex justify-between mb-8">
            <FormField register={register} labelText="Customer" htmlFor="roleCustomer" name="role" value="Customer" type="radio" required={false} />

            <FormField register={register} labelText="Manager" htmlFor="roleManager" name="role" value="Manager" type="radio" required={false} />
          </div>

          <ButtonPrimary type="submit" innerContent="Register now" />
        </form>
      </div>
    </main>
  );
}
