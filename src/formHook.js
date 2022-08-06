import { useState } from "react";

export const useFormField = (type) => {
  const [addedValue, setAddedValue] = useState("");
  const onHandleChange = (event) => {
    setAddedValue(event.target.value);
  };

  const clearValue = () => {
    setAddedValue("");
  };

  let objData = {
    onChange: onHandleChange,
    value: addedValue,
    type: type,
    reset: clearValue
  };
  return objData;
};
