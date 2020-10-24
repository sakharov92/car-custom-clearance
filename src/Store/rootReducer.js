import { combineReducers } from "redux";
import editData from "./reducers/editData";
import isResultShown from "./reducers/switchResult"


const rootReducer = combineReducers({ editData, isResultShown });

export default rootReducer;