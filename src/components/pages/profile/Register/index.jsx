import { FormField } from "../../../form/FormField";
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
          <FormField labelContent="This label" labelFor="name" inputName="name" inputType="text" inputRequired={true} />
        </form>
      </div>
    </main>
  );
}
