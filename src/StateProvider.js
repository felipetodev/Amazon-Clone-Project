import React, { createContext, useContext, useReducer } from "react";

// Prepara el dataLayer
export const StateContext = createContext();

// Wrap la app y provee el dataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull informacion de la dataLayer
export const useStateValue = () => useContext(StateContext);