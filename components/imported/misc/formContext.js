import { createContext, useState } from "react";

const FormContext = createContext();

export function DialogProvider({ children }) {
  const [isDialogRegistroOpen, setIsDialogRegistroOpen] = useState(false);
  const [isDialogInicioOpen, setIsDialogInicioOpen] = useState(false);
  const [isRegisterConfirmOpen, setIsRegisterConfirmOpen] = useState(false);
  const [isPasswordConfirmOpen, setIsPasswordConfirmOpen] = useState(false);

  return (
    <FormContext.Provider
      value={{
        isDialogInicioOpen,
        setIsDialogInicioOpen,
        isDialogRegistroOpen,
        setIsDialogRegistroOpen,
        isRegisterConfirmOpen,
        setIsRegisterConfirmOpen,
        isPasswordConfirmOpen,
        setIsPasswordConfirmOpen,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormContext;
