import { createContext, useContext, useState } from "react";
import { useAlert } from "./AlertContext";

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [playersCount, setPlayersCount] = useState(2);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [names, setNames] = useState([]);
  const [dareCategories, setDareCategories] = useState([]);

  const { showToast } = useAlert();

  // NEXT
  const next = () => {
    if (step === 2 && category.length === 0) {
      showToast("Plese select an option");
    } else if (step === 3 && type.length === 0) {
      showToast("Plese select an option");
    } else if (step >= 4) {
      setStep(4);
    } else setStep(step + 1);
  };

  // BACK
  const back = () => {
    if (step <= 1) {
      setStep(1);
    } else setStep(step - 1);
  };

  return (
    <PlayerContext.Provider
      value={{
        step,
        setStep,
        playersCount,
        setPlayersCount,
        category,
        setCategory,
        type,
        setType,
        names,
        setNames,
        next,
        back,
        dareCategories,
        setDareCategories,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
