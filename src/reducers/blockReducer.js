import * as types from '../actions/types'

export  default function (state = [], action) {
    switch (action.type){
        case types.BLOCK_CLICK:
            return [...state, ...action.payload]
    }
    return state;
}