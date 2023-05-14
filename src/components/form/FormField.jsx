export function FormField(props) {
  return (
    <div>
      <label className="" for={props.labelFor}>
        {props.labelContent}
      </label>
      <input name={props.inputName} type={props.inputType} required={props.inputRequired} pattern={props.inputPattern} title={props.inputTitle} className="text-black border rounded-lg border-dark text-sm" />
    </div>
  );
}
