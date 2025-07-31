import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
const apiValue = createContext();

function AllData({ children }) {
    const [api, setApi] = useState([]);
    useEffect(() => {
        axios.get("/assets/js/api.json")
        .then((item) => {
            setApi(item.data.data);
        })
    }, [])
    return (
        <apiValue.Provider value={"red"}>
            {children}
        </apiValue.Provider>
    )
}

export default AllData;
export { apiValue };