export const getInputBorderColor = (touched, error) => {
  if (touched && error) {
    return '#ff4d4f';
  }
  return undefined;
};

export const getInputStyles = (touched, error) => {
  return {
    borderColor: getInputBorderColor(touched, error)
  };
};