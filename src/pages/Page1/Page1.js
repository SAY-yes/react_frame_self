import React,{Component} from 'react';
import './Page1.css';
import img from '../../asset/imgs/11.png'

export default class Page1 extends Component {
    render() {
        console.log(this.props.location)
        return (
            <div className="page-box">
                <p>this is page1......</p>
                <img src={img}/>
            </div>
        )
    }
}