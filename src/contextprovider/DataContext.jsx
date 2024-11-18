import { createContext, useEffect, useState } from "react";

export const AllContext = createContext();
const DataContext = ({children}) => {
    const [service, setService] = useState();

    useEffect(()=>{
        const loadData = async () =>{
            const response = await fetch('./service.json');
            const data = await response.json();
            setService(data);
        }
        loadData();
    },[])

    // sign up method implement 
    const DataInfo = {
        service,
    }
    return <AllContext.Provider value={DataInfo}>{children}</AllContext.Provider>
};

export default DataContext;