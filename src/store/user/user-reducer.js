export const USER_ACTION_TYPES = {
    SET_CUURENT_USER: 'SET_CURRENT_USER'
};

const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CUURENT_USER:
            return { ...state, currentUser: payload };
        default:
            return state;
    }
};