import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/">首頁</Link></li>
                <li><Link to={{pathname:"/page1",search: '?sort=name',state: { price: 18 }}}>Page1</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/userInfo">UserInfo</Link></li>
            </ul>
        )
    }
}