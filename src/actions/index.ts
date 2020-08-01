import { LOAD_LOCATIONS } from './types'
import apis from '../services/apis'

export const loadLocations = () => async (dispatch: (arg0: { type: string; payload: any }) => any) => {
    const response = await apis.fetch_Locations()
    const {locations} =  <any> await response
    return dispatch({
        type: LOAD_LOCATIONS,
        payload: locations
    })
}
