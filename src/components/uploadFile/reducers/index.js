import {IS_UPLOAD_FILE, IS_UPLOAD_FILE_SUCCESS, UPDATE_PROGRESS} from '../constants';
const doUploadFile={};
doUploadFile[IS_UPLOAD_FILE] = (state, action)=> {
    return state.mergeDeepIn(['isUploadLoad'], !!action.status);
};

doUploadFile[IS_UPLOAD_FILE_SUCCESS] = (state, action)=> {
    return state.mergeDeepIn(['isUploadLoad'], !!action.status);
};

doUploadFile[UPDATE_PROGRESS] = (state, action)=> {
    return state.mergeDeepIn(['progress'], action.json);
};



export default doUploadFile;