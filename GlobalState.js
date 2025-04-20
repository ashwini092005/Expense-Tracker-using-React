import React, { createContext, useReducer } from "react";

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

function AppReducer(state, action) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions, addTransaction }}>
      {children}
    </GlobalContext.Provider>
  );
};
