import { CHANGE_PAGE } from '../constants';
import * as Immutable from "immutable";
import {getListBooks} from "../../../utils";

const pagination = {};
pagination[CHANGE_PAGE] = (state, action)=> {
    if (!action && !action.receive) {
        return state;
    }
    const setCurrentPage = state.setIn(['pagination', 'currentPage'], state.getIn(['pagination', 'currentPage'])+1);
    if ( state.getIn(['pagination', 'type']) === 'nextAuto') {
        const addBooks = setCurrentPage.get('listBooks').concat(Immutable.fromJS(action.receive));
        const test = setCurrentPage.mergeDeepIn(['listBooks'], addBooks);
        const setResultSearch = getListBooks(test.get('listBooks'),test.getIn(['contextSearch','value']));
        return test.setIn(['contextSearch', 'resultSearch'], setResultSearch);
    }
    return setCurrentPage.mergeDeepIn(['listBooks'], action.receive);
};

export default pagination;
