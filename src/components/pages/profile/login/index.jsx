import { FormField } from "../../../form/FormField";
import { ButtonPrimary } from "../../../ui/actions/buttons/ButtonPrimary";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../../form/schema/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { API_HOLIDAZE_URL } from "../../../../api/constants";
import { useState } from "react";

export function Login() {
  const [profile, setProfile] = useState();
  const [error, setError] = useState(false);
  const [didUserLogin, setDidUserLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
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
        const result = await response.json();
        throw new Error(result.errors[0].message);
      }

      const result = await response.json();

      console.log(result);

      setProfile(result);
      setError(false);
      setDidUserLogin(true);
      console.log(result);
      console.log(profile);
    } catch (error) {
      setError(true);
      setDidUserLogin(false);
      setErrorMessage("Unable to login. " + error.name + " " + error.message);
    }
  }

  return (
    <main className="grow">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
        <h1 className="text-center mt-20 font-headings text-2xl text-dark">Login</h1>
        <form className="bg-light py-16 px-10 rounded-lg max-w-xs mx-auto mt-10 mb-20" method={"post"} action={"/auth/login"} onSubmit={handleSubmit(onSubmit)}>
          {didUserLogin ? <div className="block text-center text-primary">Your are now logged in</div> : <div></div>}

          <FormField register={register} labelText="Email" htmlFor="email" name="email" type="email" placeholder="example@stud.noroff.no" required={true} errorText={errors.email?.message} />

          <FormField register={register} errorText={errors.password?.message} labelText="Password" htmlFor="password" name="password" type="password" placeholder="Choose a password..." required={true} />

          {error ? <div className="block text-center text-secondary">{errorMessage}</div> : <div></div>}
          <ButtonPrimary type="submit" innerContent="Login" />
        </form>
      </div>
    </main>
  );
}
