import { createContext, useContext, useState } from "react";

const SuggestionsContext = createContext();

export const SuggestionsProvider = ({ children }) => {
  const [suggestedDares, setSuggestedDares] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <SuggestionsContext.Provider
      value={{
        suggestedDares,
        setSuggestedDares,
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </SuggestionsContext.Provider>
  );
};

export const useSuggestions = () => useContext(SuggestionsContext);
