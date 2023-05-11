import { FormInput } from "../../../form/FormInput";

/*import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
*/
export function Register() {
  return (
    <main className="grow">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
        <h1 className="text-center">Register component 3</h1>
        <form action="#">
          <FormInput />
          <FormInput />
          <FormInput />
        </form>
      </div>
    </main>
  );
}
