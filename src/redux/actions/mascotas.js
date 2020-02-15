export const GET = "[mascotas] get";
export const ADD = "[mascotas] add";
export const REMOVE = "[mascotas] remove";
export const UPDATE = "[mascotas] update";
export const SELECT = "[mascotas] select";
export const NEW_ITEM = "[mascotas] new"
export const SET_CURRENT_ID = "[mascotas] set current id"

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
        nombre: "",
        FN: (new Date()).toJSON(),
        tipo: "F",
        imagen: null
    }
});
export const setCurrent = (id) => ({
    type: SET_CURRENT_ID,
    id: id
})