import contactsReducer from "./contactsReducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    contacts: contactsReducer,
})

export default allReducers;
