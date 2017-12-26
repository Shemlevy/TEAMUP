import GameService from '../../service/game/GameService.js'


export const LOAD_GAMES = 'game/loadGames';
export const GET_GAME = 'game/getGame'

const SET_GAMES = 'game/setGames';

export default {
    state: {
        games: [],
    },
    getters: {
        gamesToDisplay(context) {
            return state.games
        },
        [SET_CURRGAME](gameId) {
            return game = state.games.find(obj => obj._id === gameId)
        }
    },
    mutations: {
        [SET_GAMES](state, { games }) {
            state.games = games
        },
    },
    actions: {
        [LOAD_GAMES]({commit, rootState}, { catagoryId }) {
            catagory = state.catagorys.find(obj => obj._id === catagoryId)
            return GameService.getGamesByCatagory(catagory)
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
