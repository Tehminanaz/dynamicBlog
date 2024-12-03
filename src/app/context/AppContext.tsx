"use client";


import { createContext, useState } from "react";

export type AppType = {
    search: string,
    setSearch: (search: string) => void,
    filterString: string,
    setFilterString: (filterString: string) => void
}

export const AppContext = createContext<AppType>({
    search: "",
    setSearch: () => {},
    filterString: "",
    setFilterString: () => {},
})

const AppContextProvider = ({children} : {children: React.ReactNode}) => {
    const [search, setSearch] = useState<string>("");
    const [filterString, setFilterString] = useState<string>("All");

    const values = {
        search, setSearch, filterString, setFilterString
    }
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;