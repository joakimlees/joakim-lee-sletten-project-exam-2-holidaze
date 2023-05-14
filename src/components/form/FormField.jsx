export function FormField(props) {
  return (
    <div className="flex flex-col">
      <label className="" for={props.labelFor}>
        {props.labelContent}
      </label>
      <input name={props.inputName} type={props.inputType} required={props.inputRequired} pattern={props.inputPattern} title={props.inputTitle} className="text-black border rounded-lg border-dark text-sm" />
    </div>
  );
}
