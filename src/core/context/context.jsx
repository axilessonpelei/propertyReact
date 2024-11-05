import { createContext, useState } from "react";

const Context = createContext({});

const ContextProvider = ({ children }) => {
    const [wallet, setWallet] = useState("");

    const values = {
        wallet,
        setWallet,
    };

    return <Context.Provider value={values}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
