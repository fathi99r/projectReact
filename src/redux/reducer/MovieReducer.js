import {AllMovies} from'../types/type'
const initalValue = {movies: [], pageCount:0}
const moviesReducer = (state =initalValue , action)=>{
switch (action.type) {
    case AllMovies:
        return {movies: action.data}
       default: return state

  
        
}



}
export default moviesReducer