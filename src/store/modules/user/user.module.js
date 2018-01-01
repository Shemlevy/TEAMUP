import userService from '../../../service/user/UserService.js';

export const USER_LOGIN = 'user/userLogin';
export const USER_LOGOUT = 'user/userLogout';
export const USER_UPDATE = 'user/userUpdate';
export const USER_REGISTER = 'user/userRegister';
export const USER_DELETE = 'user/userDelete'
export const GET_USER = 'user/getUser'

const SET_USER = 'user/setUser';

export default {
    state: {
        user: null
    },
    mutations: {
        [SET_USER](state, { user }) {
            state.user = user;
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
        }
    },
    getters: {
        [GET_USER]: state => {
            return state.user
        }
    }
}
