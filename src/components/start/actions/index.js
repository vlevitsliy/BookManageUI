// import { START, IS_LOAD, IS_RECEIVE_PROPS, IS_LOAD_SUCCESS } from '../constants';
//
// export function isLoad(status) {
//     return { type: IS_LOAD, status }
// }
//
// export function start() {
//     return (dispatch) => {
//         dispatch({ type: IS_LOAD, status: true });
//         fetch(`/BookManger/start/`)
//             .then(response => response.json())
//             .then(json => {
//                     dispatch({ type: START, receive: json });
//                     dispatch({ type: IS_LOAD, status: false });
//                     dispatch({ type: 'ON_INIT_KEY_SEARCH', text: '' });
//                 }
//             );
//     }
// }