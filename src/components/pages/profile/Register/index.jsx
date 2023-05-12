import { FormInput } from "../../../form/FormInput";
import { FormInputLabel } from "../../../form/FormInputLabel";

/*import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
*/
export function Register() {
  return (
    <main className="grow">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
        <h1 className="text-center">Register component 3</h1>
        <form className="flex flex-col" action="#">
          <FormInputLabel innerContent="Username" />
          <FormInput name="username" />
          <FormInputLabel innerContent="Email address" />
          <FormInput name="email" />
          <FormInputLabel innerContent="Password" />
          <FormInput name="password" required={true} />
        </form>
      </div>
    </main>
  );
}
