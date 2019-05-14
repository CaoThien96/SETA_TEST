import {FETCH_SUCCESS} from '../constans/index'
const initState = {
    docs:[],
}
const reducers = (state=initState,action)=>{
    switch (action.type) {
        case FETCH_SUCCESS:
            return {...state,docs:action.payload};
        default:
            return state;
    }
}
export default reducers