import CategoryService from '../../../service/category/CategoryService.js'

export const LOAD_CATEGORIES = 'category/loadCategories';
export const CHANGE_SELECTED_CATEGORY ='category/changeCategory'
export const GET_SELECTED_CATEGORY = 'category/getCategory';
export const SET_SELECTED_CATEGORY = 'category/setSelectedCategory'

const SET_CATEGORIES = 'category/setCategories'
const GET_CATEGORY_BY_ID = 'category/getCategoryById'

export default {
    state:{
        categories: [],
        selectedCategory: null
    },
    getters: {
        [GET_SELECTED_CATEGORY](state){
            return state.selectedCategory
        },
        [GET_CATEGORY_BY_ID](state){
            return (categoryId) =>
                state.categories.find(category => category._id === categoryId)
        }
    },
    mutations: {
        [SET_SELECTED_CATEGORY](state, {categoryId}){
            category = [GET_CATEGORIES_BY_ID](categoryId)
            state.selectedCategory = category
        },
        [SET_CATEGORIES](state, {categories}){
            state.categories = categories
        },
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