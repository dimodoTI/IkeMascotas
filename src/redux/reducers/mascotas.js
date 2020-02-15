import {
    GET,
    ADD,
    REMOVE,
    UPDATE,
    SELECT,
    NEW_ITEM,
    SET_CURRENT_ID
} from "../actions/mascotas";

const initialState = {
    entities: [],
    timeStamp: null,
    selectedItem: null,
    selectedTimeStamp: null,
    currentId: null,
    currentTimeStamp: null,
    currentTask: "ADD"
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };

    switch (action.type) {
        case GET:
            break;
        case ADD:
            action.item.id = (new Date()).getTime()
            newState.entities.push(action.item)
            newState.timeStamp = (new Date()).getTime()
            break;
        case UPDATE:
            newState.entities = newState.entities.filter(e => e.id != newState.selectedItem.id)
            action.item.id = newState.selectedItem.id
            newState.entities.push(action.item)
            newState.timeStamp = (new Date()).getTime()
            break;
        case REMOVE:
            newState.entities = newState.entities.filter(e => e.id != action.id)
            newState.timeStamp = (new Date()).getTime()
            break;
        case SELECT:
            newState.selectedItem = action.item
            newState.selectedTimeStamp = (new Date()).getTime()
            newState.currentTask = "UPDATE"
            break;
        case NEW_ITEM:
            newState.selectedItem = action.item
            newState.selectedTimeStamp = (new Date()).getTime()
            newState.currentTask = "ADD"
            break;
        case SET_CURRENT_ID:
            newState.currentId = action.id
            newState.currentTimeStamp = (new Date()).getTime()

    }
    return newState;
};