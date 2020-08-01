import { combineReducers } from "redux";
import locations from './locations.reducers'
const appReducer = combineReducers({
  locations
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action)
}

export default rootReducer;
