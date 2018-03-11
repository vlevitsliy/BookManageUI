import { VIDEO_ON_HOVER } from '../constants';

const videoContent = {};
videoContent[VIDEO_ON_HOVER] = (state, action)=> {
    return state.mergeDeepIn(['video', 'onHover'], action.id);
};

export default videoContent;