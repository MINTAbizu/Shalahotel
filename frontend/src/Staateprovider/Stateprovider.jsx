import { createContext, useContext, useReducer } from "react";

export const MyContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <MyContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </MyContext.Provider>
  );
};

export const useStateValue = () => useContext(MyContext);