import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';

// import Hello from './component/Hello/Hello'
import GetRouter from './router/router';
import Nav from './components/Nav/Nav';
import {BrowserRouter} from 'react-router-dom';


if(module.hot){
    module.hot.accept()
}

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Nav />
                <GetRouter />
            </div>
        </BrowserRouter>
    </Provider>
    , 
    document.getElementById('app'));