import { useState , useEffect } from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/context';
import Home from './components/home-component/home-component';
import Error from './components/Error-component/error-component';
import './App.css'

const App = () => {
  return(
    <div>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}



const API_URL = `https://www.omdbapi.com/?apikey=8436ba50`;



// const App = () => {
//   const [movie, setMovie] = useState([])
//   const [search, setSearch] = useState(["ghost"])

//   useEffect(() => {
//     const fetchMovie = async () => {
//       const URL = `${API_URL}&s=${search}`;
//       const response = await fetch(URL);
//       const data = await response.json();
//       console.log(data);
//       setMovie(data.Search);
//     }
//     fetchMovie();
//   } , [])

//   return (
//     <div className="App">
//       <div className='search-box'>
//       <input className='search' type="text" placeholder="Search for a movie"/>
//       </div>
      
//       <Card movie={movie}/>
//     </div>
//   )
// }

export default App
