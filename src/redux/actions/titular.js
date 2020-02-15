export const GET = "[titular] get";
export const UPDATE = "[titular] update";



export const get = () => ({
  type: GET
});

export const update = (nombre, documento) => ({
  type: UPDATE,
  nombre: nombre,
  documento: documento
});