// import { useEffect } from "react";
// import { API_OPTIONS } from "../utils/constants";
import Header from "./Header";
// import { useDispatch } from "react-redux";
// import { addNowPlayingMovies } from "../utils/moviesSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse=()=>{
    useNowPlayingMovies();

    return <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
        {/*
            Main Container
             -Video Background
             -Video Title
            Secondary Container
             -Movie lIst *n
               -card
         */}
    </div>
    }
    export default Browse;