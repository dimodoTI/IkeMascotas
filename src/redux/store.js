import {
  loadState,
  saveState
} from "../libs/localStorage"
import {
  applyMiddleware,
  createStore,
  compose
} from "redux";
import {
  logger
} from "redux-logger";
import {
  rootReducer as reducers
} from "./reducers";
import {
  middleware as ui
} from "./middleware/ui";
import {
  middleware as api
} from "./middleware/api";
import {
  middleware as mascotas
} from "./middleware/mascotas";
import {
  middleware as hc
} from "./middleware/hc";
import {
  middleware as agenda
} from "./middleware/agenda";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let mdw = [
  api,
  ...ui,
  ...mascotas,
  ...hc,
  ...agenda
]

if (process.env.NODE_ENV !== 'production') {
  mdw = [...mdw, logger]
}

const initialData = loadState()

export const store = createStore(
  reducers,
  initialData,
  composeEnhancers(applyMiddleware(...mdw))
);


store.subscribe(function () {
  saveState(store.getState())
})