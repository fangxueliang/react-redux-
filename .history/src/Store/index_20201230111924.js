import { createStore } from "redux";//引入redux
import reducer from "./reducer"
export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())//创建一个store