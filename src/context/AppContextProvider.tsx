import { createContext, useState } from "react";

interface AppContextType {
    showModel: boolean;
    setShowModel: (value: boolean) => void;
}

export const AppContext = createContext<AppContextType>({
    showModel: false,
    setShowModel: () => { }
});


export default function AppContextProvider({ children }: { children: React.ReactNode }) {
    const [showModel, setShowModel] = useState(false);

    return (
        <AppContext.Provider value={{ showModel, setShowModel }}>
            {children}
        </AppContext.Provider>
    )
}
