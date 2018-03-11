import { IS_LOAD, IS_LOAD_SUCCESS } from "./constants";

export function isLoad(status) {
    return { type: IS_LOAD, status }
}

export function doRequest(context, doReceive) {
    return (dispatch) => {
        dispatch({ type: IS_LOAD, status: true });
        fetch(context)
            .then(response => response.json())
            .then(json => {
                    dispatch({ type: doReceive, receive: json });
                    dispatch({ type: IS_LOAD, status: false });
                    dispatch({ type: IS_LOAD_SUCCESS, text: "" });
                    // dispatch(after);
                }
            );
    }
}