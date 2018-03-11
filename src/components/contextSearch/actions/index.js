import {CHANGE_VALUE} from "../constants";

export const changeValue = (value) => {
    return { type: CHANGE_VALUE, value }
}