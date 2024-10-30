import { createContext, useState } from "react";

const Context = createContext({});

const ContextProvider = ({ children }) => {


    //Добавить в values "sortedProducts, setSortedProducts"
    const values = {};

    return <Context.Provider value={values}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
