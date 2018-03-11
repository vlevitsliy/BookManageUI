import React from 'react';
import { connect } from 'react-redux';
import ReactHLS from 'react-hls';
import {onHover} from './actions';
//{/*<ReactHLS autoplay controls={false} url={'/streams'} />*/}
const VideoItem = ({id, bookTitle, bookAuthor, price, onHoverId}) => {
    if (id === onHoverId) {
        return (
            <ReactHLS autoplay controls={false} url={'/BookManger/stream'} />
        );
    }

    return (
        <div>Превью</div>
    )

};

const VideoContent = (props) => {
    let config = {
        "fragLoadingTimeOut": 1500000,
        "fragLoadingRetryDelay": 1500000,
        "fragLoadingMaxRetryTimeout": 1500000,
        "levelLoadingMaxRetryTimeout": 1500000,
        "levelLoadingTimeOut": 1500000,
        "levelLoadingRetryDelay": 15000000,
        "preload": true,
    };
    return (
        <div>
            <div style={{border: "1px solid red"}}>
                <ReactHLS hlsConfig={config} autoplay preload controls={false} url={'/BookManger/stream'} />
            </div>
            {props.videoList.map((item, i)=>{
                return (
                    // onMouseOver={()=>props.onHover(item.get('id'))} onMouseLeave={()=>props.onHover(-1)}
                    <div>
                        {/*<VideoItem*/}
                            {/*id={item.get('id')}*/}
                            {/*bookTitle = {item.get('title')}*/}
                            {/*bookAuthor = {item.get('videoDescription')}*/}
                            {/*price = {item.get('price')}*/}
                            {/*key={i}*/}
                            {/*onHoverId={props.onHoverId}*/}
                        {/*/>*/}
                    </div>
                );
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        videoList: state.mainReducers.get('videoList'),
        onHoverId: state.mainReducers.getIn(['video', 'onHover']),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onHover: (id) => dispatch(onHover(id))
    }
};

const ReduxVideoContent = connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoContent);

export default ReduxVideoContent;