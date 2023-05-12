export function FormInput(props) {
  return <input name={props.name} type={props.type} required={props.required} pattern={props.pattern} title={props.title} className="text-black border rounded-lg border-dark text-sm" />;
}
