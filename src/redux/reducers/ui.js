import {
    SHOW_SPINNER,
    HIDE_SPINNER,
    SHOW_ERROR,
    HIDE_ERROR,
    SELECT_MENU
} from "../actions/ui";

const initialState = {
    loading: 0,
    errorTimestamp: false,
    errorMessages: null,
    opcionSeleccionada:{option:"",timeStamp:null}
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };

    switch (action.type) {
        case SHOW_SPINNER:
            newState.loading += 1;
            break;
        case HIDE_SPINNER:
            newState.loading -= 1;
            break;
        case SHOW_ERROR:
            newState.errorTimeStamp = (new Date()).getTime()
            newState.errorMessages = action.message
            break;
        case HIDE_ERROR:
            newState.errorTimeStamp = (new Date()).getTime()
            newState.errorMessages = null
            break;
        case SELECT_MENU:
            newState.opcionSeleccionada.option = action.option
            newState.opcionSeleccionada.timeStamp=(new Date()).getTime()
            break;

    }
    return newState;
};