import {FETCH_POSTS, NEW_POSTS} from "../../../../cra-redux/cra-redux/src/actions/types";

const initialState = {
    items: [],
    item: {},
}
const postReducer = (state= initialState,action) => {
        switch(action.type){
            case FETCH_POSTS:
                return {
                    ...state,
                    items: action.payload
                }
            default:
                return state;
        }
}

export default postReducer