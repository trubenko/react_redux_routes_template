import { BLOCK_CLICK } from './types'

export function onClickBlock(){
    debugger;
    return {
        type: BLOCK_CLICK,
        payload: [1,3,4,6,7]
    }
}