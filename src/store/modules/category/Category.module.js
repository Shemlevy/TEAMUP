import CategoryService from '../../../service/category/CategoryService.js'

export const LOAD_CATEGORIES = 'category/loadCategories';
export const CHANGE_SELECTED_CATEGORY ='category/changeCategory'
export const GET_SELECTED_CATEGORY = 'category/getSelectedCategory';
export const SET_SELECTED_CATEGORY = 'category/setSelectedCategory'
export const SET_CATEGORY_FILTER = 'category/setCatagoryFilter'
export const GET_CATEGORIES_BY_FILTER = 'category/setSelectedCategory'

const SET_CATEGORIES = 'category/setCategories'
const GET_CATEGORY_BY_ID = 'category/getCategoryById'

export default {
    state:{
        categories: [],
        selectedCategory: null,
        filterByInput: null
    },
    getters: {
        [GET_SELECTED_CATEGORY](state){
            return state.selectedCategory
        },
        [GET_CATEGORY_BY_ID](state){
            return (categoryId) =>
                state.categories.find(category => category._id === categoryId)
        },
        [GET_CATEGORIES_BY_FILTER](state){
            if(!state.filterByInput) return state.categories
            return state.categories.filter(category => {
                return category.name.includes(state.filterByInput)
            })
        }
    },
    mutations: {
        [SET_SELECTED_CATEGORY](state, payload){
            console.log('In category module: ', payload.categoryId)
            var category = state.categories.find(category => category._id === payload.categoryId)
            console.log(category)
            state.selectedCategory = category
        },
        [SET_CATEGORIES](state, {categories}){
            state.categories = categories
        },
        [SET_CATEGORY_FILTER](state, {input}){
            state.filterByInput = input
        }
    },
    actions:{
        [LOAD_CATEGORIES]({commit}){
            CategoryService.getCategories()
                .then(categories => {
                    commit({type:SET_CATEGORIES, categories})
                })
                .catch(err => {
                    commit(SET_CATEGORIES, [])
                    throw err
                })
        },
    }
}
