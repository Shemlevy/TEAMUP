import GameService from '../../../service/game/GameService.js'

import { GET_SELECTED_CATEGORY } from '../category/Category.module'
import EventBusService, { SHOW_LOADER, HIDE_LOADER } from '../../../service/EventBusService.js'





export const LOAD_GAMES = 'game/loadGames'
export const GET_GAMES = 'game/getGames'
export const CREATE_GAME = 'game/createGame'
export const DELETE_GAME = 'game/deleteGame'
export const UPDATE_GAME = 'game/updateGame'
export const LOAD_GAME_BY_ID = 'game/loadGameById'
export const GET_SELCTED_GAME = 'game/getSelectedGame'
export const SET_SELECTED_GAME = 'game/setSelectedGame'
export const SET_SELECTED_GAME_BY_Id = 'game/setSelectedGameById'
export const GET_GAMES_BY_CTG = 'game/getGamesByCtg'
export const ADD_NEW_GAME = 'game/addNewGame'
export const UPDATE_SPECIFIC_GAME = 'game/updateSpecificGame'
export const GET_GAME_REPS = 'game/getGameReps'


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
        },
        [GET_GAME_REPS](state) {
            if (state.games) {
                let i = 1
                return state.games.reduce((acc, game) => {
                    if (acc[game.category.name]) {
                        acc[game.category.name] = `font-size:${i++}em`
                    } else {
                        acc[game.category.name] = `font-size:${i}em`
                    }
                    return acc
                }, {})
               
            } else {
                return null
            }
        }
    },
    mutations: {
        [SET_GAMES](state, { games }) {
            console.log('state in game module mutation: ', state)
            state.games = games
        },
        [SET_SELECTED_GAME](state, { game }) {
            state.selectedGame = game;
        },
        [UPDATE_SPECIFIC_GAME](state, { updatedGame }) {
            console.log('recived game in module :', updatedGame)
            var gameIdx = state.games.findIndex(game => game._id === updatedGame._id)
            if (gameIdx >= 0) {
                console.log('game idx: ', gameIdx)
                state.games.splice(gameIdx, 1, updatedGame)
                if (state.selectedGame._id === updatedGame._id) {
                    state.selectedGame = updatedGame;
                }
            }
        },
        [ADD_NEW_GAME](state, { game }) {
            state.games.push(game)
        }
    },
    actions: {
        [LOAD_GAMES]({ commit }, payload) {
            EventBusService.$emit(SHOW_LOADER)
            return GameService.getGames(payload.ctgId)
                .then(games => {
                    commit({ type: SET_GAMES, games })
                    EventBusService.$emit(HIDE_LOADER)
                })
                .catch(err => {
                    commit(SET_GAMES, [])
                    EventBusService.$emit(HIDE_LOADER)
                    throw err
                })
        },
        [CREATE_GAME]({ commit }, { newGame }) {
            console.log('new game to create', newGame)
            return GameService.createGame(newGame)
                .then(res => {
                    console.log('result in module: ', res)
                    return res
                })
                .catch(err => {
                    console.log('new game didnt make it to module')
                })
        },
        [DELETE_GAME]({ commit }, { gameId }) {
            GameService.deleteGame(gameId)
                .then(_ => {
                    console.log('game deleted in data base')
                })
                .catch(_ => {
                    console.log('game was not deleted in database')
                })
        },
        [UPDATE_GAME]({ commit }, { game }) {
            GameService.updateGame(game)
                .catch(err => {
                    console.log('game was not updated in database')
                })
        },
        [LOAD_GAME_BY_ID](state, { gameId }) {
            EventBusService.$emit(SHOW_LOADER)
            var gameExists = state.games && state.games.find(game => game_id === gameId)
            var res = null;
            if (gameExists) {
                res = new Promise(resolve, reject => {
                    resolve(gameExists)
                })
            } else {
                res = GameService.getGameById(gameId)
            }

            res.then(game => {
                state.commit({ type: SET_SELECTED_GAME, game })
                EventBusService.$emit(HIDE_LOADER)

            })
            .catch(err => {
                console.log('was not able to load game')
            })


        },
        socket_newGameAdded({ state }, payload) {
            console.log(payload)
        }

    }

}
