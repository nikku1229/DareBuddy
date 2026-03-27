import { createContext, useState, useContext } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const [toast, setToast] = useState("");

  const showToast = (msg) => {
    setToast(msg);

    setTimeout(() => {
      setToast("");
    }, 1000);
  };

  return (
    <AlertContext.Provider value={{ loader, setLoader, toast, showToast }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
