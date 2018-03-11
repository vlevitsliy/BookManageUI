import {CHANGE_VALUE} from "../constants";
import { getListBooks } from '../../../utils';

const doContextSearch={};
doContextSearch[CHANGE_VALUE] = (state, action)=> {
    const getListBooks2 = state.get('listBooks');
    const resultSearch = getListBooks(getListBooks2, action.value);
    // let resultSearch = [];
    // getListBooks.forEach(item => {
    //         if (item.get('name').toLowerCase().includes(action.value.toLowerCase())) {
    //             resultSearch.push(item.get('id'));
    //         }
    //     }
    // );
    const setResultSearch = state.setIn(['contextSearch', 'resultSearch'], resultSearch);
    return setResultSearch.mergeDeepIn(['contextSearch', 'value'], action.value);
};

export default doContextSearch;