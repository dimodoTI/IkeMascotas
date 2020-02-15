import {
    GET,
    UPDATE
} from "../actions/titular";

const initialState = {
    timeStamp: null,
    entity: {}
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };

    switch (action.type) {
        case GET:
            newState.loading += 1;
            break;
        case UPDATE:
            newState.timeStamp = (new Date()).getDate()
            newState.entity = {
                nombre: action.nombre,
                documento: action.documento
            }

            break;
    }
    return newState;
};