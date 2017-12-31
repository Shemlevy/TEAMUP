import userService from '../../../service/user/UserService.js';
import GameService from '../../../service/game/GameService.js'

export const USER_LOGIN = 'user/userLogin';
export const USER_LOGOUT = 'user/userLogout';
export const USER_UPDATE = 'user/userUpdate';
export const USER_REGISTER = 'user/userRegister';
export const USER_DELETE = 'user/userDelete'
export const GET_USER = 'user/getUser'
export const GET_USER_GAMES = 'user/getUserGames'

const SET_USER = 'user/setUser';
const SET_USER_GAMES = 'user/setUserGames'


export default {
    state: {
        user: null,
        games: null
    },
    mutations: {
        [SET_USER](state, { user }) {
            state.user = user;
        },
        [SET_USER_GAMES](state, {games}){
            state.games = games
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
                    if(res.games.length > 0){
                        
                        GameService.getPlayerGames(res._id)
                        .then(res =>{console.log(res)
                            commit({type: SET_USER_GAMES, games: res})
                        })
                        .catch(e => console.log('error in user module'))
                }
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
    },
    getters: {
        [GET_USER](state){
            return state.user
        },
        [GET_USER_GAMES](state){
            return state.games
        }
    }
}
