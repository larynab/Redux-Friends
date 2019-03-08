import { ERROR, GETTING_FRIENDS, GET_FRIENDS } from '../actions';

const initialState = {
    friends: [],
    gettingFriends: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_FRIENDS:
            return{ ...state, gettingFriends: true };
        case GET_FRIENDS:
            return{ ...state, friends: action.payload, gettingFriends: false };
        case ERROR:
            return {
                ...state,
                gettingFriends: false,
                error: action.payload
            }    
        default: 
            return state;
    }
};

export default reducer;