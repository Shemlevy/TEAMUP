import userService from '../../../service/user/UserService.js';

export const USER_LOGIN = 'user/userLogin';
export const USER_REGISTER = 'user/userRegister';
export const GET_USER = 'user/getUser'

const SET_USER = 'user/setUser';

export default {
    state:{
        user: null
    },
    mutations:{
        [SET_USER](state, {user}){
           state.user = user;
        }
    },
    actions:{
        [USER_REGISTER]({commit}, {user}){
            userService.register(user).then(res =>{
                commit({type: SET_USER , user: res.user})
                }).catch(err => {
                    console.log('Error: ', err)
                    throw err
                })
        },
        [USER_LOGIN]({commit}, {user}){
            return userService.login(user)
                .then(res =>{
                    console.log('res: ' , res)
                    commit({type: SET_USER , user: user})
                })
        }
    }
}
