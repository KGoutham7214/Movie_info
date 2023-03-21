import { createContext, useState, useEffect, useContext } from "react";
const AppContext = createContext();

const jsonUrl = import.meta.env.VITE_REACT_APP_API;
const API_URL = `https://www.omdbapi.com/?page=1&apikey=${jsonUrl}`;


const AppProvider = ({ children }) => {
    const [movie, setMovie] = useState([])
    const [search, setSearch] = useState(["thor"])
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState({show: false, msg: ""})

    
    const fetchMovie = async (URL) => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            console.log(data);
            if(data.Response === "True"){
                setMovie(data.Search);
                setLoading(false);
            }else{
                setError({show: true, msg: data.Error})
                setLoading(false);
            }
            
        } catch (error) {
            console.log(error);
        } 
    }

    useEffect(() => {
        
        fetchMovie(`${API_URL}&s=${search}`);
    } , [search])

    return <AppContext.Provider value={{search, setSearch, movie, isLoading, error}}>
                {children}
           </AppContext.Provider>;
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
