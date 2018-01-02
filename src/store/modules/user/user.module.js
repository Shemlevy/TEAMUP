import userService from '../../../service/user/UserService.js';
import GameService from '../../../service/game/GameService.js'

export const USER_LOGIN = 'user/userLogin';
export const USER_LOGOUT = 'user/userLogout';
export const USER_UPDATE = 'user/userUpdate';
export const USER_REGISTER = 'user/userRegister';
export const USER_DELETE = 'user/userDelete'
export const GET_USER = 'user/getUser'
export const GET_USER_GAMES = 'user/getUserGames'
export const UPDATE_SPECIFIC_USER_GAME ='user/updateSpecificUserGame'

const SET_USER = 'user/setUser';
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
            var gameIdx = state.games.findIndex(game => game._id === updatedGame._id)
            if(gameIdx >= 0){
                state.games.splice(gameIdx , 0 , updatedGame)
            }
        }
    },
    actions: {
        [USER_REGISTER]({ commit }, { newUser }) {
            userService.register(newUser).then(res => {
                commit({ type: SET_USER, user: res })
            }).catch(err => {
                console.log('Error: ', err)
                throw err
            })
        },
        [USER_LOGIN]({ commit }, { signInDetails }) {
            return userService.login(signInDetails)
                .then(res => {
                    commit({ type: SET_USER, user: res })
                        console.log('user module sends request to service')
                        GameService.getPlayerGames(res._id)
                        .then(res =>{console.log('results in player module: ' ,res.data)
                            commit({type: SET_USER_GAMES, games: res.data})
                        })
                        .catch(e => console.log('error in user module'))
                })
        },
        [USER_LOGOUT]({commit}){
            userService.logout()
                .then(_ =>  commit({ type: SET_USER, user: null }))
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
