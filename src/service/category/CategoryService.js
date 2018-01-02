'use strict'

import axios from 'axios';

const CATEGORY_URL = 'http://localhost:3003/data/category';


function getCategories() {
    return axios.get(CATEGORY_URL)
            .then(res => res.data)
            .catch(_ => console.log('error'))
}

export default {
    getCategories
}


