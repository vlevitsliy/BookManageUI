import * as Immutable from "immutable";
import start from './components/start/reducers';
import pagination from './components/pagination/reducers';
import videoContent from './components/videoContent/reducers';
import doRequest from './common/doRequest/reducers';
import showBook from "./components/autor/reducers";
import doUploadFile from "./components/uploadFile/reducers";
import doContextSearch from "./components/contextSearch/reducers";
import book from "./components/book/reducers";
const mainReducers = (state, action) => {
    const initialState = {
        //todo не нужно????
        keySearch: {
            keyWord: ''
        },
        isLoad: false,
        contextSearch: {
            value: '',
            resultSearch: [],
        },
        isUploadLoad: false,
        listBooks: [],
        showBooks:[],
        menu: {},
        pagination: {
            pageSize: 0,
            currentPage: 1,
            type: "nextAuto",// page, next, nextAuto
            isLoadBook: false,
        },
        videoList:[
            {
                id: 1,
                videoTitle:'title',
                videoDescription: 'video description',
                price: 100
            },
            {
                id: 2,
                videoTitle:'title',
                videoDescription: 'video description',
                price: 100
            },
            {
                id: 3,
                videoTitle:'title',
                videoDescription: 'video description',
                price: 101
            },
        ],
        video: {
            onHover: 0,
        }
    };
    const reducers = Object.assign(doRequest,start, pagination, videoContent, showBook, doUploadFile, doContextSearch, book);
    const imInitialState = Immutable.fromJS(initialState);
    if (!state) {
        return imInitialState;
    }

    if (!reducers[action.type]) {
        return state;
    }
    return reducers[action.type](state, action);
}

export default mainReducers