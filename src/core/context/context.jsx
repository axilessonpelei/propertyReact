import { createContext, useState } from "react";

const Context = createContext({});

const ContextProvider = ({ children }) => {

    return <Context.Provider value={values}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
