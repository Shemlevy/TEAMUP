import Vuex from 'vuex'

import categoryModule from './modules/category/Category.module.js';
import gameModule from './modules/game/Game.module.js';
import userModule from './modules/user/user.module.js';
import mapModule from './modules/map/Map.module.js';

export default new Vuex.Store({
    modules:{
        category: categoryModule,
        game: gameModule,
        user: userModule,
        map: mapModule
    },
    strict : true
})