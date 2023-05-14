export function FormField({ inputName, value, inputTitle, register, labelFor, labelContent, inputPattern, inputRequired, inputType, inputPlaceholder }) {
  return (
    <div className="flex flex-col my-2">
      <label className="font-headings text-dark text-sm" htmlFor={labelFor}>
        {labelContent}
      </label>
      <input {...register(inputName)} name={inputName} value={value} type={inputType} required={inputRequired} pattern={inputPattern} title={inputTitle} placeholder={inputPlaceholder} className="text-black border font-paragraph text-sm rounded-lg border-dark text-sm px-2" />
    </div>
  );
}

/*
export function FormField(props) {
  return (
    <div className="flex flex-col my-2">
      <label className="font-headings text-dark text-sm" for={props.labelFor}>
        {props.labelContent}
      </label>
      <input name={props.inputName} type={props.inputType} required={props.inputRequired} pattern={props.inputPattern} title={props.inputTitle} placeholder={props.inputPlaceholder} className="text-black border font-paragraph text-sm rounded-lg border-dark text-sm px-2" />
    </div>
  );
}
*/
