// we'll need axios
import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const START_FETCH = 'START_FETCH';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const fetchData = () => {
    return dispatch => {
        dispatch({ type: FETCHING });
        axios
            .get('https://swapi.co/api/people/')
            .then(  response => {   //console.log(response.data.results);
                                    let resultsArrName ='results';
                                    dispatch({type: FETCHED, payload: response.data[resultsArrName]})})
            .catch( err => dispatch({type: ERROR, error: err}));
    };
};

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const startFetch =() => {
    return {type: 'START_FETCH'};
}
