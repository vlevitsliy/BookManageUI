import * as Immutable from "immutable";
import { START } from '../constants';
import { getDeepProperty, getListBooks } from '../../../utils';

const start = {};
start[START] = (state, action)=> {
    if (!action && !action.receive) {
        return state;
    }
    const setPageSize = state.setIn(['pagination','pageSize'], getDeepProperty(action, 'receive.pageSize.pageSize'))
    const setListBooks = setPageSize.mergeDeepIn(['listBooks'], getDeepProperty(action, 'receive.listBook'));
    const setResultSearch = getListBooks(setListBooks.get('listBooks'),'');
    return setListBooks.setIn(['contextSearch', 'resultSearch'], setResultSearch)
};

export default start;