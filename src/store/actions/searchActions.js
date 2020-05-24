import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING} from './types';
import axios from 'axios';
import {APIKey} from '../../ApiKey';

export const searchMovie = text =>{
    return (dispatch =>{

        dispatch({
            type:SEARCH_MOVIE,
            payload: text  
        })
    }
        )
}

export const fetchMovies= text => {
    return (dispatch => {
        axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
            .then(res => {
                dispatch({
                    type: FETCH_MOVIES,
                    payload: res.data
                })
            })
                .catch(err=>console.log(err)
                )
    })
}

export const fetchMovie=id=>{
    return (dispatch => {
        axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
            .then(res=>{
                dispatch({
                    type: FETCH_MOVIE,
                    payload: res.data
                })
            })
            .catch(err=> console.log(err)
            )
    })
}

export const setLoading=()=>{
    return ({
            type: LOADING
        })
    
}