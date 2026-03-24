import { createContext, useContext, useState, useEffect } from "react";

const GameContext = createContext();

export const GameProvider = ({children}) => {
  
  return(
    <GameContext.Provider value>
      {children}
    </GameContext.Provider>
  )
}