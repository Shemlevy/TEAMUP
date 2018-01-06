import userService from '../../../service/user/UserService.js';
import GameService from '../../../service/game/GameService.js'
import StorageService from '../../../service/StorageService.js'

export const USER_LOGIN = 'user/userLogin';
export const USER_LOGOUT = 'user/userLogout';
export const USER_UPDATE = 'user/userUpdate';
export const USER_REGISTER = 'user/userRegister';
export const USER_DELETE = 'user/userDelete'
export const GET_USER = 'user/getUser'
export const GET_USER_GAMES = 'user/getUserGames'
export const UPDATE_SPECIFIC_USER_GAME ='user/updateSpecificUserGame'
export const LOAD_USER_GAMES ='user/loadUserGames'
export const SET_USER = 'user/setUser';


const SET_USER_GAMES = 'user/setUserGames'


export default {
    state: {
        user: null,
        games: null,
        connect: false,
    },
    mutations: {
        [SET_USER](state, { user }) {
            state.user = user;
        },
        [SET_USER_GAMES](state, {games}){
            state.games = games
        },
        [UPDATE_SPECIFIC_USER_GAME](state , {updatedGame}){
            var userExist = updatedGame.players.filter(player => player.id === state.user._id)
            var gameIdx = state.games.findIndex(game => game._id === updatedGame._id)
            
            if(userExist[0] && gameIdx !== -1){
                state.games.splice(gameIdx , 1 , updatedGame)
            }else if(userExist[0] && gameIdx === -1){
                state.games.push(updatedGame)
            }else if(!userExist[0] && gameIdx !== -1){
                state.games.splice(gameIdx, 1)
            }
        }
    },
    actions: {
        [USER_REGISTER]({ commit }, { newUser }) {
            userService.register(newUser).then(res => {
                commit({ type: SET_USER, user: res });
                StorageService.saveToStorage('user' , res)
            }).catch(err => {
                console.log('Error: ', err)
                throw err
            })
        },
        [USER_LOGIN]({ commit }, { signInDetails }) {
            return userService.login(signInDetails)
                .then(res => {
                    commit({ type: SET_USER, user: res })
                        StorageService.saveToStorage('user', res)
                        GameService.getPlayerGames(res._id)
                        .then(games =>{
                            console.log('results in player module: ' ,games)
                            commit({type: SET_USER_GAMES, games})
                        })
                        .catch(e => console.log('error in user module'))
                })

        },
        [LOAD_USER_GAMES]({commit}, {userId}){
            console.log('user id in dispatch: ', userId)
            GameService.getPlayerGames(userId)
            .then(res =>{console.log('results in player module: ' ,res)
                commit({type: SET_USER_GAMES, games: res})
            })
            .catch(e => console.log('error in user module'))
        },
        [USER_LOGOUT]({commit}){
            console.log('logging out in module')
            return userService.logout()
                .then(_ =>  {
                    commit({ type: SET_USER, user: null })
                    StorageService.clearStorage()
                    return
                })
        },
        [USER_UPDATE]({commit}, {userDetails}){
            userService.updateUser(userDetails)
                .then(res => commit({type: SET_USER, user: res}))
                .catch(err => 'couldnt update user')
        },
        [USER_DELETE]({commit}){
            userService.deleteUser(state.user._id)
                .then(_ => commit({ type: SET_USER, user: null }))
                .catch(_ => 'couldnt delete user... ')
        },
        socket_userUpdated({commit}, payload){
            console.log(payload)
        }
    },
    getters: {
        [GET_USER]: state => {
            return state.user
        },
        [GET_USER_GAMES](state){
            return state.games
        }
    }
}
