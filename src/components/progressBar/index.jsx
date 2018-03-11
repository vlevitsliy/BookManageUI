import React from 'react';
import { connect } from 'react-redux';
import {doUploadFile} from "../uploadFile/action";

const ProgressBar = ({total, position, type})=> {
    if (type!=='progress') {
        return(<div/>)
    }

    //TODO округлить
    const getPercent = position*100/total;
    return(
        <div>
            <div style={{height: "15px", backgroundColor: 'red', width: `${getPercent}%`}}></div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        total: state.mainReducers.getIn(['progress','total']),
        type: state.mainReducers.getIn(['progress','type']),
        position: state.mainReducers.getIn(['progress','position']),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUploadFile: (file) => dispatch(doUploadFile("/BookManger/updateBase", file))
    }
};

const ReduxProgressBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProgressBar);

export default ReduxProgressBar;

