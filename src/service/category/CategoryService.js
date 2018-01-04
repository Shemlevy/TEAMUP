'use strict'

import axios from 'axios';

let CATEGORY_URL = 'http://localhost:3003/data/category';
if(process.env.NODE_ENV !== 'development'){
    CATEGORY_URL = '/data/category'
}


function getCategories() {
    return axios.get(CATEGORY_URL)
            .then(res =>  {return res.data})
            .catch(_ => console.log('error'))
}

export default {
    getCategories
}


