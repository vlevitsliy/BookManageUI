import React from 'react';
import {DELETE_BOOK} from './constants';
import Styles from './styles.css';
const Book = ({arrBook, idAutor, showBooks, doRequest, autorInArray}) => {
    const index = showBooks.findIndex(i => i === idAutor);
    if (index===-1) {
        return(<div/>)
    }
    return(
        <div className="tableBook">
            <div className='headerBook'>
                <div className="leftHeader">Название</div>
                <div className="rightHeder">Цена</div>
            </div>
                {
                    arrBook.map((item, j)=>{
                        debugger;
                    return(
                        <div className="rowBook" key={`rowBook${j}`}>
                            <div className='title' key={`name${j}`}>{item.get('bookTitle')}</div>
                            <div className='price' key={`price${j}`}>{item.get('price')}</div>
                            <div><a onClick={()=>{doRequest(`/BookManger/remove/${autorInArray}/${j}/${item.get('id')}`, DELETE_BOOK)}}>Удалить</a> <a onClick="">Редактировать</a></div>
                        </div>
                    )}
                    )
                }
        </div>
    );
};

export default Book;