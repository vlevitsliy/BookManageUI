import {VIDEO_ON_HOVER} from "../constants";

export function onHover(id) {
    return { type: VIDEO_ON_HOVER, id: id }
}