export const GET = "[hc] get";
export const ADD = "[hc] add";
export const REMOVE = "[hc] remove";
export const UPDATE = "[hc] update";
export const SELECT = "[hc] select";
export const NEW_ITEM = "[hc] new"


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
        descripcion: "",
        fecha: (new Date()).toJSON(),
        realizado: "N"
    }
});