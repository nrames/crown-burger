import axios from 'axios';
import { setFlash } from './flash';

const setLocations = (locations) => {
    return { type: 'SET_LOCATIONS', locations }
}

export const fetchLocations = () => {
    return dispatch => {
        axios.get('/api/locations')
            .then(res => {
                dispatch(setLocations(res.data));
                console.log(res.data)
            })
            .catch(err => {
                dispatch(setFlash('Error fetching inputs. Try again.', 'red'));
                console.log(err)
            });
    }
}