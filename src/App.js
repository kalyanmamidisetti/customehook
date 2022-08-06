import React from "react";
import { useFormField } from "./formHook";

export default function App() {
  const { reset, ...textData } = useFormField("text");
  return (
    <div className="App">
      <h2>Text Field Custome Hook</h2>
      <input {...textData} />
      <p>{textData.value}</p>
      <p>{textData.type}</p>
    </div>
  );
}
