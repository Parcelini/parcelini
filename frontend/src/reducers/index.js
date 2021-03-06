import { combineReducers } from "redux";
import parcel_info from "./parcel_info";
import errors from './errors';
import auth from './auth';
import messages from "./messages";
import contact from "./contact";
import three from "./three";

export default combineReducers({
    parcel_info,
    errors,
    messages,
    auth,
    contact,
    three
});