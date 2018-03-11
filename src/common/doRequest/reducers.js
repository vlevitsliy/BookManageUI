import {IS_LOAD, IS_LOAD_SUCCESS} from './constants'
const doRequest={};
doRequest[IS_LOAD] = (state, action)=> {
    return state.mergeDeepIn(['isLoad'], !!action.status);
};

doRequest[IS_LOAD_SUCCESS] = (state, action)=> {
    return state.mergeDeepIn(['isLoad'], !!action.status);
};

export default doRequest;