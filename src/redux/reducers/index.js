import {
  combineReducers
} from "redux";
import {
  reducer as uiReducer
} from "./ui"
import {
  reducer as titularReducer
} from "./titular"
import {
  reducer as mascotasReducer
} from "./mascotas";
import {
  reducer as hcReducer
} from "./hc";
import {
  reducer as agendaReducer
} from "./agenda";
export const rootReducer = (state = {}, action) => {

  return {
    ui: uiReducer(state.ui, action),
    titular: titularReducer(state.titular, action),
    mascotas: mascotasReducer(state.mascotas, action),
    hc: hcReducer(state.hc, action),
    agenda: agendaReducer(state.agenda, action)
  };
};