
export const GET_CURR_ADDRESS = 'map/getCurrAddress'
export const SET_CURR_ADDRESS = 'map/setCurrAddress'
export const GET_PICK_ADDRESS = 'map/getPickAddress'
export const SET_PICK_ADDRESS = 'map/setPickAddress'
export const SET_USER_LOCATION = 'map/setUserLocation'
export const GET_USER_LOCATION = 'map/getUserLocation'

export default {
    state: {
        currAddress: null,
        pickedAddress: null,
        userLocation: null,
    },
    mutations: {
        [SET_CURR_ADDRESS](state, { address }) {
            state.currAddress = address
        },
        [SET_PICK_ADDRESS](state, { address }) {
            state.pickedAddress = address
        },
        [SET_USER_LOCATION](state, { location }) {
            state.userLocation = location
        },

    },
    getters: {
        [GET_CURR_ADDRESS](state) {
            return state.currAddress
        },
        [GET_PICK_ADDRESS](state) {
            return state.pickedAddress
        },
        [GET_USER_LOCATION](state) {
            return state.userLocation
        }
    }
}