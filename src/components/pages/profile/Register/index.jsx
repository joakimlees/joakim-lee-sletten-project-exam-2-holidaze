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
          <FormField register={register} labelContent="Username" labelFor="username" inputName="username" inputType="text" inputPlaceholder="dinDjarin123" inputRequired={true} />
          <FormField register={register} labelContent="Email" labelFor="email" inputName="email" inputType="email" inputPlaceholder="example@stud.noroff.no" inputRequired={true} />
          <FormField register={register} labelContent="Avatar" labelFor="avatar" inputName="avatar" inputType="url" inputPlaceholder="imageUrl.no" inputRequired={false} />
          <FormField register={register} labelContent="Password" labelFor="password" inputName="password" inputType="password" inputPlaceholder="Choose a password..." inputRequired={true} />
          <div className="flex justify-between mb-8">
            <FormField register={register} labelContent="Customer" labelFor="roleCustomer" inputName="role" inputType="radio" inputRequired={false} />
            <FormField register={register} labelContent="Manager" labelFor="roleManager" inputName="role" inputType="radio" inputRequired={false} />
          </div>
          <ButtonPrimary type="submit" innerContent="Register now" />
        </form>
      </div>
    </main>
  );
}
