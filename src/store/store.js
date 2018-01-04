import Vuex from 'vuex'

import categoryModule, { GET_SELECTED_CATEGORY } from './modules/category/Category.module.js';
import gameModule from './modules/game/Game.module.js';
import userModule from './modules/user/user.module.js';
import mapModule from './modules/map/Map.module.js';

import {UPDATE_SPECIFIC_GAME, ADD_NEW_GAME} from './modules/game/Game.module.js';
import {UPDATE_SPECIFIC_USER_GAME} from './modules/user/user.module.js';

export default new Vuex.Store({
    state:{
        connect: false
    },
    modules:{
        category: categoryModule,
        game: gameModule,
        user: userModule,
        map: mapModule
    },
    mutations:{
        SOCKET_CONNECT: (state,  status ) => {
            state.connect = true;
        }
    },
    actions:{
        socket_gameUpdated({commit}, game){
            commit({type: UPDATE_SPECIFIC_GAME, updatedGame: game})
            commit({type: UPDATE_SPECIFIC_USER_GAME, updatedGame: game})
        },
        socket_gameCreated({commit}, game){
            if(!categoryModule.state.selectedCategory || game.category === categoryModule.state.selectedCategory){
                commit({type: ADD_NEW_GAME, game})
                console.log('Game sent to game module from root state')
            }
            commit({type: UPDATE_SPECIFIC_USER_GAME, updatedGame: game})
        }
    },
    strict : true
})

function _matchUserGame(userId, players){
    var res = players.forEach(player => {
        return player.id === userId
    });
    return res

}