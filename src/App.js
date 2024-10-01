import React, { useEffect, useState } from "react";
import NavBAr from "./components/NavBAr";
import { Container } from "react-bootstrap";
import MoviesList from "./components/MoviesList";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import axios from "axios";
import MoviesDetails from "./components/MoviesDetails";
import { useDispatch } from "react-redux";


const App = () => {
  const [movies, setMovies] = useState([]);
  const [pageCount, setpageCount] = useState(0);
const dispach = useDispatch()
  //get all data from API
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=5bcbe1aa1c8c7eba40c94bb585cbca4c&&language=ar-US&page=1"
    );
    setMovies(res.data.results);
    setpageCount(res.data.total_pages);
  };

  //to search in API
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`
      );
      setMovies(res.data.results);
      setpageCount(res.data.total_pages);
    }
  };

  //get pages
  const getpage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=5bcbe1aa1c8c7eba40c94bb585cbca4c&&language=ar-US&page=${page}`
    );
    setMovies(res.data.results);
    setpageCount(res.data.total_pages);
  };
  useEffect(() => {
   
    getAllMovies();
  }, []);

  return (
    <div>
      <NavBAr search={search} />
      <Container>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<MoviesList movies={movies} getpage={getpage} pageCount={pageCount} /> } /> 
      <Route path="/movie/:id" element={<MoviesDetails/>}/>
        </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
