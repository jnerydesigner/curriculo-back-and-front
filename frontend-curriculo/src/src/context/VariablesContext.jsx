import { createContext, useState } from "react";

export const VariableContext = createContext();

export const VariableProvider = ({ children }) => {
  const [routeName, setRouteName] = useState("Perfil");

  const toggleRouteName = (route) => {
    setRouteName(route)
  }

  return (
    <VariableContext.Provider value={{ routeName, toggleRouteName }}>
      {children}
    </VariableContext.Provider>
  );
};
