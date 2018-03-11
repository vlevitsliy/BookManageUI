import {ON_CLICK_AUTOR} from '../constants';
import * as Immutable from "immutable";

const showBook = {};
showBook[ON_CLICK_AUTOR] = (state, action)=> {
    if (!action && !action.receive) {
        return state;
    }

    const index = state.get('showBooks').findIndex(i => i === action.id);
    if (index>=0){
        const removeShowBooks = state.get('showBooks').delete(index);
        return state.setIn(['showBooks'], removeShowBooks);
    }

    const addShowBooks = state.get('showBooks').withMutations((list) => {
        list.push(action.id);

    });
    return state.mergeDeepIn(['showBooks'], addShowBooks);
};


export default showBook;