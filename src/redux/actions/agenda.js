export const GET = "[agenda] get";
export const ADD = "[agenda] add";
export const REMOVE = "[agenda] remove";
export const UPDATE = "[agenda] update";
export const SELECT = "[agenda] select";
export const NEW_ITEM = "[agenda] new"


export const get = () => ({
    type: GET

});

export const add = (item) => ({
    type: ADD,
    item: item
});
export const update = (item) => ({
    type: UPDATE,
    item: item
});
export const remove = (id) => ({
    type: REMOVE,
    id: id
});
export const select = (item) => ({
    type: SELECT,
    item: item
});
export const newItem = (item) => ({
    type: NEW_ITEM,
    item: {
        id: null,
        idMascota: 0,
        idVacuna: 0,
        fecha: (new Date()).toJSON(),
        realizado: "N"
    }
});