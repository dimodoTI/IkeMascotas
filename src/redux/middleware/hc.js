import {
    ADD,
    UPDATE,
    newItem
} from "../actions/hc";


export const addProcess = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type == ADD || action.type == UPDATE) {
        dispatch(newItem())
    }
};

export const middleware = [addProcess];