import { AUTHENTICATED, NOT_AUTHENTICATED } from "../action/actionTypes";

const initialState = {
    authChecked: false,
    loggedIn: false,
    currentUser: {}
};

export default function authorization(state = initialState, action:any) {
    switch (action.type) {
        case AUTHENTICATED:
            return {
                authChecked: true,
                loggedIn: true,
                currentUser: action.payload,
            };
        case NOT_AUTHENTICATED:
            return {
                authChecked: true,
                loggedIn: false,
                currentUser: {}
            };
        default:
            return state;
    }
} 