import React from 'react';
import { connect } from 'react-redux';

// import { start } from './actions';
import {CHANGE_PAGE} from "./constants";
import {doRequest} from "../../common/doRequest/action";

const PageIndex = ({index, changePageCallBack}) => {
  return (
      <div>
          <a href="#" onClick={()=>{changePageCallBack(index)}}>{index}</a>
      </div>
  );
};

const NumberPages = ({pageSize, changePageCallBack}) => {
    return (
        <div className="pagination">
            {
                [...Array(pageSize)].map((x, index) =>
                    <PageIndex index={index} key={index} changePageCallBack={changePageCallBack}/>
                )
            }
        </div>
    )
};

const NextPage = ({nextIndex, changePageCallBack}) => {
    return (
        <div onClick={()=>{changePageCallBack(nextIndex)}}>Next page {nextIndex}</div>
    );
};

class Scroll extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll(event) {
        let currentIndex = 0;
        const doc = document.documentElement;
        const top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        // x=100-a*100:b=(b-a):b*100;
        const maxHeight = document.getElementById('root').offsetHeight;
        // const result = (maxHeight - top)*100/maxHeight;
        const result = maxHeight-top;
        console.log("maxHeight-top", maxHeight-top);
        console.log("top", top);
        console.log("maxHeight", maxHeight);
        console.log("result=", result);
        if (result<1000 && !this.props.isLoad && currentIndex !==this.props.nextIndex) {
            this.props.changePageCallBack(this.props.nextIndex);
        }
        currentIndex = this.props.nextIndex;
    };

    render (){
        return (
            <div>Loading</div>
        );
    }
}

const Pagination = (props) => {
    if (props.pageSize===0 || props.pageSize === undefined) {
        return (<div/>);
    }
    const pageSize = props.pageSize>100 ? 100 : props.pageSize;

    if (props.typePaganation==='page') {
        return(
            <NumberPages pageSize={pageSize} changePageCallBack={props.onChangePage} />
        );
    }

    if (!props.currentPage || props.currentPage===0 || props.currentPage===undefined) {
        return (<div/>);
    }

    const currentPage = props.currentPage;

    if (props.typePaganation==='next') {
        return(
            <NextPage nextIndex={currentPage+1} changePageCallBack={props.onChangePage} />
        );
    }

    if (props.typePaganation==='nextAuto') {
        return (
            <Scroll nextIndex={currentPage+1} isLoad={props.isLoad} changePageCallBack={props.onChangePage} />
        );
    }
};

const mapStateToProps = (state) => {
    return {
        pageSize: state.mainReducers.getIn(['pagination', 'pageSize']),
        currentPage: state.mainReducers.getIn(['pagination', 'currentPage']),
        typePaganation: state.mainReducers.getIn(['pagination', 'type']),
        isLoadBook: state.mainReducers.getIn(['pagination', 'isLoadBook']),
        isLoad: state.mainReducers.get('isLoad'),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        //TODO можно улучшить, вызывать непосредственно сам редьюсер через экшн
        onChangePage: (page) => dispatch(doRequest(`/BookManger/bookpage/${page}`, CHANGE_PAGE))
    }
};

const ReduxPagination = connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination);

export default ReduxPagination;