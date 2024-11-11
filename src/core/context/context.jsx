import { createContext, useState } from "react";

const Context = createContext({});

const ContextProvider = ({ children }) => {
    const [wallet, setWallet] = useState("");
    const [status, setStatus] = useState("");

    const values = {
        wallet,
        setWallet,
        status,
        setStatus,
    };

    return <Context.Provider value={values}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
