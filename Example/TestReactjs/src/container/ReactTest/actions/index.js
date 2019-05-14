import {FETCH_SUCCESS} from '../constans'
export const fetchSuccess = (payload)=>{
    return {
        type:FETCH_SUCCESS,
        payload
    }
}
