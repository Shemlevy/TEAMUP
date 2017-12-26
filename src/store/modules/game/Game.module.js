import GameService from '../../../service/game/GameService.js'


export const LOAD_GAMES = 'game/loadGames';
export const GET_SELCTED_GAME = 'game/getSelcetedGame'

const SET_GAMES = 'game/setGames';

export default {
    state: {
        games: [],
        selectedGame: null
    },
    getters: {
        gamesToDisplay(state) {
            return state.games
        },
        [GET_SELCTED_GAME](state) {
            return state.selectedGame
        }
    },
    mutations: {
        [SET_GAMES](state, { games }) {
            state.games = games
        },
    },
    actions: {
        [LOAD_GAMES]({commit}, { catagoryId }) {
            return GameService.getGamesByCatagoryId(catagoryId)
                .then(games => {
                    commit({ type: SET_GAMES, games })
                })
                .catch(err => {
                    commit(SET_GAMES, [])
                    throw err
            })
        },
    }

}
