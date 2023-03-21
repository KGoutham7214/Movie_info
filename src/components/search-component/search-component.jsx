import React , {useContext, useEffect,useState}from "react";
import { useGlobalContext } from "../../contexts/context";

const Search = () => {
    const {search, setSearch, error} = useGlobalContext();
    return(
        <div className="search-section">
            <form action="#" onSubmit={(r) => r.preventDefault() }>
                <input
                 type="text" 
                 placeholder="Search here"
                 value={search}
                 onChange={(r) => setSearch(r.target.value)}
                 />
            </form>
            <div>
            <p>{error.show && error.msg}</p>
            </div>
        </div>
    ) 
}

export default Search;