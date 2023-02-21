import AppContext from "./createContext"
import { useState } from "react";

const AppState = ({ children }) => {
    const [checked, setChecked] = useState(false);
    return (
        <AppContext.Provider value={{checked, setChecked}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppState