import { FormField } from "../../../form/FormField";
import { ButtonPrimary } from "../../../ui/actions/buttons/ButtonPrimary";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { API_HOLIDAZE_URL } from "../../../../api/constants";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { editAvatarSchema } from "../../../form/schema/editAvatarSchema";
import { useAuthPost } from "../../../../api/auth/useAuthPost";

export function EditProfile() {
  const [profile] = useLocalStorage("profile");
  const name = profile.name;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editAvatarSchema),
  });

  const { data, loading, error, postWithAuth } = useAuthPost();

  async function onSubmit(data) {
    const method = "put";
    const url = `${API_HOLIDAZE_URL}/profiles/${name}/media`;
    const body = JSON.stringify(data);

    await postWithAuth(url, {
      method,
      body,
    });
  }

  return (
    <main className="grow">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
        <h1 className="text-center mt-20 font-headings text-2xl text-dark">Register</h1>
        <form className="bg-light py-16 px-10 rounded-lg max-w-xs mx-auto mt-10 mb-20" method={"put"} action={""} onSubmit={handleSubmit(onSubmit)}>
          <FormField register={register} errorText={errors.avatar?.message} labelText="Avatar" htmlFor="avatar" name="avatar" type="url" placeholder="imageUrl.no" required={false} />
          {error ? <div className="block text-center text-secondary">Unable to update your avatar</div> : <div></div>}
          {loading ? <div className="block text-center text-dark">Updating avatar...</div> : <div></div>}
          {data ? <div className="block text-center text-primary">Your avatar was updated</div> : <div></div>}
          <ButtonPrimary type="submit" innerContent="Update avatar" />
        </form>
      </div>
    </main>
  );
}
