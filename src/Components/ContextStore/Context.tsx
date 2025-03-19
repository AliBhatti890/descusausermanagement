import { createContext, useReducer, ReactNode, Dispatch } from "react";
import { Reducer } from "./Reducer";

interface StateType {
  // Define your state type here based on the structure of 'data'
}

export const GlobalContext = createContext<{ state: StateType, dispatch: Dispatch<any> } | undefined>(undefined);
const initialState: StateType = {
  // Add initial values for your state here
};

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
