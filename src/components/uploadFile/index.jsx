import React from 'react';
import { connect } from 'react-redux';
import {CHANGE_PAGE} from "../pagination/constants";
import {doUploadFile} from "./action";
import ReduxProgressBar from "../progressBar";

// добавить https://loading.io/progress/

class UploadFile extends React.Component {

    componentWillMount () {

    }

    constructor(props) {
        super(props);
        this.formData = new FormData();
    }

    handleChangeFile(event) {
        const file = event.target.files[0];
        this.formData.set('file', file);
    }

    render (){
        return (
            <div>
                <input type="file" onChange={this.handleChangeFile.bind(this)}/>
                <input value="обновить" type="button" onClick={ () => {this.props.onUploadFile(this.formData)} }/>
                <ReduxProgressBar/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUploadFile: (file) => dispatch(doUploadFile("/BookManger/updateBase", file))
    }
};

const ReduxUploadFile = connect(
    mapStateToProps,
    mapDispatchToProps
)(UploadFile);

export default ReduxUploadFile;