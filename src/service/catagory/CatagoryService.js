'use strict'

var catagorys = [
    {
        name: 'all',
        _id: '5a4130f20f3f476dbde86d8e'
    },
    {
        name: 'soccer',
        _id: '5a41f7a62f7ac8f876f05913'
    },
    {
        name: 'poker',
        _id: '5a41fa1a69eca78df41eb03a'
    },
    {
        name: 'ping-pong',
        _id: '5a41fa1ae7736f3b000c5c15'
    }
]

function getCatagorys() {
    return new Promise((resolve, reject) => {
        resolve(catagorys)
    })
}

export default {
    getCatagorys
}