export function FormField({ name, value, title, register, htmlFor, labelText, pattern, required, type, placeholder }) {
  return (
    <div className="flex flex-col my-2">
      <label className="font-headings text-dark text-sm" htmlFor={htmlFor}>
        {labelText}
      </label>
      <input {...register(name)} name={name} value={value} type={type} required={required} pattern={pattern} title={title} placeholder={placeholder} className="text-black border font-paragraph text-sm rounded-lg border-dark text-sm px-2" />
    </div>
  );
}
