import { LOAD_LOCATIONS } from '../actions/types'

interface LocationsActionInterface {
    type: string
    payload: any
}


export default (state = [], action: LocationsActionInterface) => {
    switch (action.type) {
      case LOAD_LOCATIONS:
        return [...state, ...action.payload];
      default:
        return state;
    }
  };
