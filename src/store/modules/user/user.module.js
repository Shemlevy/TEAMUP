import userService from '../../../service/user/UserService.js';

export const USER_LOGIN = 'user/userLogin';
export const USER_REGISTER = 'user/userRegister';
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
        }
    },
    getters: {
        getuser: state => {
            return state.user
        }
    }
}
