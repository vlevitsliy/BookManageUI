import React from 'react';
import {connect} from "react-redux";
import {changeValue} from "./actions";
import Styles from "./styles.css";

const ContextSearch=(props)=>{
    return (
      <div>
          <input type="text" className="search" value={props.searchValue} onChange={props.onChangeValue}/>
      </div>
    );
};

const mapStateToProps = (state) => {
    return {
        searchValue: state.mainReducers.getIn(['contextSearch', 'value'])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeValue: (value) => dispatch(changeValue(value.target.value))
    }
};

const ReduxContextSearch = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContextSearch);

export default ReduxContextSearch;