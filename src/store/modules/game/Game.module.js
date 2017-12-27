import GameService from '../../../service/game/GameService.js'


export const LOAD_GAMES = 'game/loadGames'
export const GET_GAMES = 'game/getGames'
export const GET_SELCTED_GAME = 'game/getSelectedGame'
export const SET_SELECTED_GAME = 'game/setSelectedGame'

const SET_GAMES = 'game/setGames';

export default {
    state: {
        games: [],
        selectedGame: null
    },
    getters: {
        [GET_GAMES](state) {
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
        [SET_SELECTED_GAME](state, {gameId}){
            var game = state.games.find(game => game._id === gameId)
            if (!game) {
                state.selectedGame = null
            }else{
                state.selectedGame = game;
            }

            
        }
    },
    actions: {
        [LOAD_GAMES]({commit}, payload) {
            return GameService.getGamesByCatagoryId(payload.categoryId)
                .then(games => {
                    console.log('found a categoryyyyy')
                    commit({ type: SET_GAMES, games })
                })
                .catch(err => {
                    console.log('nooooooooooooo')
                    commit(SET_GAMES, [])
                    throw err
            })
        }
        
        
    }

}
