import Vuex from 'vuex'

import categoryModule from './modules/category/Category.module.js'
import gameModule from './modules/game/Game.module.js'

export default new Vuex.Store({
    modules:{
        category: categoryModule,
        game: gameModule
    },
    strict : true
})