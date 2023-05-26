export function handleInputChange(event, maxValue, setValue) {
  const inputValue = parseInt(event.target.value);

  if (inputValue > maxValue) {
    setValue(maxValue); // Set the value to the maximum value
  } else if (inputValue <= 0) {
    setValue(0);
  } else {
    setValue(inputValue); // Set the value to the input value
  }
}
