import {
    ADD,
    UPDATE,
    newItem
} from "../actions/mascotas";


export const addProcess = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type == ADD || action.type == UPDATE) {
        dispatch(newItem())
    }
};

export const middleware = [addProcess];