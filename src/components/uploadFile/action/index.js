import {IS_UPLOAD_FILE, UPDATE_PROGRESS } from '../constants'
export function doUploadFile(context, form) {
    return (dispatch) => {
        dispatch({ type: IS_UPLOAD_FILE, status: true });
        fetch(context, {
            method: 'POST',
            body: form})
            .then(response => {
                    dispatch({ type: IS_UPLOAD_FILE, status: false });
                    progressUpdateBase(dispatch);
                }
            );
    }
}

let progress=-1;
export const progressUpdateBase = (dispatch)=>{
    fetch("/BookManger/progress")
        .then(response => response.json())
        .then(json => {
                if ((json.position !== json.total) && (progress<json.total)) {
                    dispatch({type: "UPDATE_PROGRESS", json: json});
                    progress++;
                    setTimeout(progressUpdateBase(dispatch), 1000);
                }
            dispatch({type: "UPDATE_PROGRESS", json: {}});
            }
        );
};