import React,{useContext, useEffect,useState} from "react";
import Card from "../card-component/card-component";
import Search from "../search-component/search-component";



const Home = () =>{
    return(
        <div className="container">
            <Search />
            <Card />
        </div>
    )
}

export default Home;