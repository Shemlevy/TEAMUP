
export const GET_CURR_ADDRESS = 'map/getCurrAddress'
export const SET_CURR_ADDERSS = 'map/setCurrAddress'

export default {
    state:{
        currAddress: null,
    },
    getters: {
        [GET_CURR_ADDRESS](state){
            return state.currAddress
        }
    },
    mutations: {
        [SET_CURR_ADDERSS](state, {address}){
            state.currAddress = address
        }
    },
    actions:{


    }
}
