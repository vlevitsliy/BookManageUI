import React from 'react';
import ReduxAutor from '../autor/index';
import {start} from "../start/actions/index";
import {connect} from "react-redux";
import {doRequest} from "../../common/doRequest/action";
import {CHANGE_PAGE} from "../pagination/constants";

const ListBook = (props) => {
    if (props.listBooks.size===0) {
        return (<div/>);
    }
    return (
        <div>
            <ReduxAutor />
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        listBooks: state.mainReducers.get('listBooks')
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

const ReduxListBook = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListBook);

export default ReduxListBook;