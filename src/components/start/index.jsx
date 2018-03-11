import React from 'react';
import { connect } from 'react-redux';
import { START } from './constants';

import { doRequest } from '../../common/doRequest/action';

class Start extends React.Component {
    componentWillMount () {
        this.props.onStart();
    }

    render (){
        return <div/>;
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        //TODO можно улучшить, вызывать непосредственно сам редьюсер через экшн
        onStart: () => dispatch(doRequest('/BookManger/start/', START))
    }
};

const ReduxStart = connect(
    mapStateToProps,
    mapDispatchToProps
)(Start);

export default ReduxStart;