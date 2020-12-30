import { createStore } from "redux";//引入redux
import reducer from "./reducer"
export const store = createStore(reducer)//创建一个store