import React from 'react';
import logo from './logo.svg';
import ReduxStart from './components/start/index';
import ReduxListBook from './components/listBook/index';
import ReduxPagination from './components/pagination/index';
import VideoContent from './components/videoContent/index';
import ReduxUploadFile from "./components/uploadFile";
import ReduxContextSearch from "./components/contextSearch";
// import './App.css';
//todo обработка ошибок
const App = () => {
    return (
      <div className="App">
          <ReduxStart />
        <div className="menu">
            menu
        </div>
          {/*https://www.npmjs.com/package/redux-file-upload*/}
        <div className="listBooks">
            <ReduxUploadFile/>
            <ReduxContextSearch/>
            {/*<VideoContent  />*/}
            <ReduxListBook />
            <ReduxPagination />
        </div>
      </div>
    );
};

export default App;
