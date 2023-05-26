export function handleInputChange(event, maxValue, setValue) {
  const inputValue = event.target.value;

  if (inputValue > maxValue) {
    setValue(maxValue.toString()); // Set the value to the maximum value
  } else if (inputValue <= 0) {
    setValue("0");
  } else {
    setValue(inputValue); // Set the value to the input value
  }
}
