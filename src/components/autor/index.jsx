import React from 'react';
import {connect} from "react-redux";
import Book from "../book";
import {onClickShowBooks} from "./actions/index";
import Styles from './styles.css';
import {doRequest} from "../../common/doRequest/action";

const Autor = (props) => {
    //TODO Реализовать Callback для hover
    return(
      <div className='catalog'>
          {
              props.listBooks.map((item, i)=>{
                  if (!props.resultSearch.includes(item.get('id'))) {
                      return <div/>;
                  }
                  return(
                  <div key={item.get('id')}>
                    <div className='autor' key={`root${i}`} onClick={()=>{props.onClick(item.get('id'))}}>{item.get('name')}</div>
                      <Book doRequest={props.doRequest} autorInArray={i} arrBook={item.get('book')} key={`book${i}`} idAutor={item.get('id')} showBooks={props.showBooks}/>
                  </div>
              )})
          }
      </div>
    );
};

const mapStateToProps = (state) => {
    return {
        listBooks: state.mainReducers.get('listBooks'),
        showBooks: state.mainReducers.get('showBooks'),
        resultSearch: state.mainReducers.getIn(['contextSearch', 'resultSearch'])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => dispatch(onClickShowBooks(id)),
        doRequest: (url, reduce) => dispatch(doRequest(url, reduce))
    }
};

const ReduxAutor = connect(
    mapStateToProps,
    mapDispatchToProps
)(Autor);

export default ReduxAutor;