import {
    LOGGED
} from "../actions/ui";

export const logged = ({
    dispatch
}) => next => action => {
    next(action);
};

export const middleware = [logged];