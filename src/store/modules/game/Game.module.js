import GameService from '../../../service/game/GameService.js'


export const LOAD_GAMES = 'game/loadGames'
export const GET_GAMES = 'game/getGames'
export const CREATE_GAME = 'game/createGame'
export const DELETE_GAME = 'game/createGame'
export const UPDATE_GAME = 'game/updateGame'
export const LOAD_GAME_BY_ID = 'game/loadGameById'
export const GET_SELCTED_GAME = 'game/getSelectedGame'
export const SET_SELECTED_GAME = 'game/setSelectedGame'

const SET_GAMES = 'game/setGames';

export default {
    state: {
        games: null,
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
            return GameService.getGames(payload.categoryId)
                .then(games => {
                    commit({ type: SET_GAMES, games })
                })
                .catch(err => {
                    commit(SET_GAMES, [])
                    throw err
            })
        },
        [CREATE_GAME]({commit}, {newGame}){
            GameService.createGame(newGame)
                .then(res => {
                    console.log('new game created!!')
                    console.log('game: ' , res)
                })
                .catch(err => {
                    console.log('new game didnt make it to module')
                })
        },
        [DELETE_GAME]({commit}, {gameId}){
            GameService.deleteGame(gameId)
                .then(_ => {
                    console.log('game deleted in data base')
                })
                .catch(_ => {
                    console.log('game was not delted in database')
                })
        },
        [UPDATE_GAME]({commit}, {game}){
            GameService.updateGame(game)
                .then(res => {
                    console.log('game updated in database')
                }).catch(err => {
                    console.log('game was not updated in database')
                })
        },
        [LOAD_GAME_BY_ID]({state}, {gameId}){
            GameService.getGameById(gameId)
                .then(game => {
                    console.log(game)
                    console.log('game loaded succefully')
                    /*TODO: change to new mutation*/
                    state.selectedGame = game
                })
                .catch(err => {
                    console.log('was not able to load game')
                })
        }
        
    }

}
