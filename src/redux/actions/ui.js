export const SHOW_SPINNER = "[ui] show spinner";
export const HIDE_SPINNER = "[ui] hide spinner";
export const SHOW_ERROR = "[ui] show error";
export const HIDE_ERROR = "[ui] hide error";
export const SELECT_MENU = "[ui] seelct menu";



export const showSpinner = () => ({
  type: SHOW_SPINNER
});
export const hideSpinner = () => ({
  type: HIDE_SPINNER
});
export const showError = (message) => ({
  type: SHOW_ERROR,
  message: message
});
export const hideError = () => ({
  type: HIDE_ERROR
});
export const selectMenu = (option) => ({
  type: SELECT_MENU,
  option: option
});