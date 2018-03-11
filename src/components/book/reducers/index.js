import showBook from "../../autor/reducers";
import {DELETE_BOOK} from "../constants";


const book={};
book[DELETE_BOOK]= (state, action)=> {
    if (!action && !action.receive && !action.receive.success) {
        return state;
    }
    const getListBooks = state.get('listBooks').deleteIn([action.receive.autorPositionInArr, 'book', action.receive.bookPositionInArr]);
    return state.set('listBooks', getListBooks);
};

export default book;