import CategoryService from '../../../service/category/CategoryService.js'

export const LOAD_CATEGORIES = 'category/loadCategories';
export const CHANGE_SELECTED_CATEGORY = 'category/changeCategory'
export const GET_SELECTED_CATEGORY = 'category/getSelectedCategory';
export const SET_SELECTED_CATEGORY = 'category/setSelectedCategory'
export const SET_CATEGORY_FILTER = 'category/setCatagoryFilter'
export const GET_CATEGORIES_BY_FILTER = 'category/setSelectedCategory'
export const GET_CATEGORIES = 'category/getCategories'
export const GET_CATEGORIES_NAME = 'category/getCategoriesName'

const SET_CATEGORIES = 'category/setCategories'

export default {
    state: {
        categories: null,
        selectedCategory: null,
        filterByInput: null,
    },
    getters: {
        [GET_CATEGORIES](state) {
            return state.categories
        },
        [GET_CATEGORIES_NAME](state) {
            if (state.categories) {
                let categoryNames = state.categories.map(category => { return category.name })
                return categoryNames
            } else return null
        },
        [GET_SELECTED_CATEGORY](state) {
            return state.selectedCategory
        },
        [GET_CATEGORIES_BY_FILTER](state) {
            if (!state.filterByInput) return state.categories
            return state.categories.filter(category => {
                return category.name.includes(state.filterByInput)
            })
        }
    },
    mutations: {
        [SET_SELECTED_CATEGORY](state, payload) {
            var category = state.categories.find(category => category.name === payload.categoryName)
            state.selectedCategory = category
        },
        [SET_CATEGORIES](state, { categories }) {
            state.categories = categories
        },
        [SET_CATEGORY_FILTER](state, { input }) {
            state.filterByInput = input
        }
    },
    actions: {
        [LOAD_CATEGORIES]({ commit }) {
            CategoryService.getCategories()
                .then(categories => {
                    console.log('categories in module: ', categories);
                    commit({ type: SET_CATEGORIES, categories })
                })
                .catch(err => {
                    commit(SET_CATEGORIES, [])
                    throw err
                })
        },
    }
}
