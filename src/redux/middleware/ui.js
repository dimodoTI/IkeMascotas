import {
    CAPTURE_MEDIA,
    setMedia
} from "../actions/ui";

export const capture = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type == CAPTURE_MEDIA) {

        const small = window.matchMedia("(max-width: 600px)")
        small.addListener((e) => {
            if (e.matches) dispatch(setMedia("small"))
        })

        const medium = window.matchMedia("(max-width: 800px) and (min-width: 601px)")
        medium.addListener((e) => {
            if (e.matches) dispatch(setMedia("medium"))
        })

        const large = window.matchMedia("(min-width: 801px)")
        large.addListener((e) => {
            if (e.matches) dispatch(setMedia("large"))
        })
        if (small.matches) dispatch(setMedia("small"))
        if (medium.matches) dispatch(setMedia("medium"))
        if (large.matches) dispatch(setMedia("large"))


    }

};

export const middleware = [capture];