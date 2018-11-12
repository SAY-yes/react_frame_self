import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=Home!pages/Home/Home'
import Page1 from 'bundle-loader?lazy&name=Page1!pages/Page1/Page1'
import Counter from 'bundle-loader?lazy&name=Counter!pages/Counter/Counter'
import UserInfo from 'bundle-loader?lazy&name=UserInfo!pages/UserInfo/UserInfo'
import Loading from 'components/Loading/Loading'
import NotFound from 'bundle-loader?lazy&name=NotFound!pages/NotFound/NotFound'


const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading />
        }
    </Bundle>
)

class GetRouter extends Component {
    yourCallBack = (a) => {
        console.log(a)
    }
    render() {
        return (
            <div>
                <Route exact path="/" component={createComponent(Home)}></Route>
                <Route path="/page1" component={createComponent(Page1)}></Route>
                <Route path="/counter" component={createComponent(Counter)}></Route>
                <Route path="/userInfo" component={createComponent(UserInfo)}></Route>
                <Route path="/notFound" component={createComponent(NotFound)}></Route>
            </div> 
        )
    }
}

export default GetRouter