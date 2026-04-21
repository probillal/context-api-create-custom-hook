import { useState } from "react";

const useInputField = (defaultValue) => {
  const [filedValue, setFieldValue] = useState(defaultValue);

  const handleFieldOnChange = (e) => {
    setFieldValue(e.target.value);
  };

  return [filedValue, handleFieldOnChange];
};

export default useInputField;
