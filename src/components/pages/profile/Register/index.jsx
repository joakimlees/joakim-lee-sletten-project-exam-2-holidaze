import { FormField } from "../../../form/FormField";
import { ButtonPrimary } from "../../../ui/actions/buttons/ButtonPrimary";
/*import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
*/
export function Register() {
  return (
    <main className="grow">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
        <h1 className="text-center">Register component 3</h1>
        <form className="max-w-xs mx-auto" action="#">
          <FormField labelContent="Username" labelFor="username" inputName="username" inputType="text" inputRequired={true} />
          <FormField labelContent="Email" labelFor="email" inputName="email" inputType="email" inputRequired={true} />
          <FormField labelContent="Avatar" labelFor="avatar" inputName="avatar" inputType="url" inputRequired={false} />
          <FormField labelContent="Password" labelFor="password" inputName="password" inputType="text" inputRequired={true} />
          <div className="flex justify-between">
            <FormField labelContent="Customer" labelFor="roleCustomer" inputName="role" inputType="radio" inputRequired={false} />
            <FormField labelContent="Manager" labelFor="roleManager" inputName="role" inputType="radio" inputRequired={false} />
          </div>
          <ButtonPrimary content="Register now" />
        </form>
      </div>
    </main>
  );
}
