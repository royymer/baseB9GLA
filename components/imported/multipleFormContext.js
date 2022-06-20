import { createContext, useState } from "react";

const MultipleFormContext = createContext();

export function MultipleFormProvider({ children }) {
  const [multipleForm, setMultipleForm] = useState([]);

  return (
    <MultipleFormContext.Provider
      value={{
        multipleForm,
        setMultipleForm,
      }}
    >
      {children}
    </MultipleFormContext.Provider>
  );
}

export default MultipleFormContext;
