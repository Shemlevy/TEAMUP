import CatagoryService from '../../service/catagory/CatagoryService.js'

export const LOAD_CATAGORYS = 'game/loadCatagorys';
export const CHANGE_SELECTED_CATAGORY ='game/changeCatagory'
export const GET_SELECTED_CATAGORY = 'game/getCatagory'

const SET_CATAGORYS = 'game/setCatagorys'
const SET_SELECTED_CATAGORY = 'game/setCatagory'
const GET_CATAGORY_BY_ID = 'game/getCatagoryById'

export default {
    state:{
        catagorys: [],
        selectedCatagory: null
    },
    getters: {
        [GET_SELECTED_CATAGORY](catagoryId){
            return state.selectedCatagory
        },
        [GET_CATAGORY_BY_ID](catagoryId){
            return catagorys.find(catagory => catagory._id === catagoryId)
        }
    },
    mutations: {
        [SET_SELECTED_CATAGORY](state, {catagoryId}){
            catagory = state.getters.[GET_CATAGORY_BY_ID](catagoryId)
            state.selectedCatagory = catagory
        },
        [SET_CATAGORYS](state, {catagorys}){
            state.catagorys = catagorys
        },
    },
    action:{
            [LOAD_CATAGORYS]({commit}){
            GameService.getCatagorys()
            .then(catagorys => {
                commit({type:SET_CATAGORYS, catagorys})
            })
            .catch(err => {
                commit(SET_CATAGORYS, [])
                throw err
            })
        },
    }
}