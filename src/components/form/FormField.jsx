export function FormField(props) {
  return (
    <div className="flex flex-col my-2">
      <label className="font-headings text-dark text-sm" for={props.labelFor}>
        {props.labelContent}
      </label>
      <input name={props.inputName} type={props.inputType} required={props.inputRequired} pattern={props.inputPattern} title={props.inputTitle} className="text-black border font-paragraph text-sm rounded-lg border-dark text-sm px-3" />
    </div>
  );
}
