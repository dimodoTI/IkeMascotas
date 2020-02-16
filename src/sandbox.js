import {} from "../css/main.css"
import {} from "../css/media.css"
import {} from "../css/nunito.css"
import {} from "../css/fontSizes.css"
import {} from "../css/colors.css"
import {} from "../css/shadows.css"
import {} from "../css/imagenes.css"
import {
    store
} from "../src/redux/store"
import {
    viewManager
} from "./views/manager"
import {
    newItem as newMascota
} from "./redux/actions/mascotas"
import {
    newItem as newHC
} from "./redux/actions/hc"
import {
    newItem as newAgenda
} from "./redux/actions/agenda"
import {
    captureMedia
} from "./redux/actions/ui"

store.dispatch(captureMedia())
store.dispatch(newMascota())
store.dispatch(newHC())
store.dispatch(newAgenda())