// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { API_OPTIONS } from "../utils/constants";
// import { addTrailerVideo } from "../utils/moviesSlice";

// const useMovieTrailer=(movieId)=>{
//     const dispatch=useDispatch();
//     // const [trailerId,setTrailerId]=useState(null);
     
//     const getMovieVideos=async()=>{
//         const data=await fetch('https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US', API_OPTIONS)
//         const json=await data.json();
//         console.log(json)
//         const filterData=json.results.filter((video)=>video.type==="Trailer");
//         const trailer=filterData.length?filterData[0]:json.results[0];
//         console.log(trailer)
//         dispatch(addTrailerVideo(trailer))
//     };
//     useEffect(()=>{
//         getMovieVideos();
//     })
// }
// export default useMovieTrailer;
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
            const json = await data.json();
            // console.log(json);
            const filterData = json.results.filter((video) => video.type === "Trailer");
            const trailer = filterData.length ? filterData[0] : json.results[0];
            // console.log(trailer);
            dispatch(addTrailerVideo(trailer));
        } catch (error) {
            console.error("Error fetching movie videos:", error);
        }
    };

    useEffect(() => {
        getMovieVideos();
    }, [movieId, dispatch]); // Add movieId and dispatch to the dependency array

};

export default useMovieTrailer;
