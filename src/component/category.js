import React, {Component} from "react";
import {connect} from 'react-redux';

export class Category extends Component {
    render() {
        return (
            <div className="" style={{ 'margin':'auto' }}>
                <nav className="navbar navbar-expand-lg navbar-light" >
                    <div className="collapse navbar-collapse" >
                        <div className="navbar-nav m-auto " >
                            <ul className="navbar-nav " style={{cursor:'pointer'}}>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={()=>this.props.updateCategoryTo('business')} >Business</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={()=>this.props.updateCategoryTo('health')} > Health</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={()=>this.props.updateCategoryTo('sports')} > Sports</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={()=>this.props.updateCategoryTo('science')} >Science</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={()=>this.props.updateCategoryTo('entertainment')} >Entertainment</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={()=>this.props.updateCategoryTo('technology')} >Technology</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

}
const dispatchAction = dispatch =>{

    return {
        updateCategoryTo: (key)=>dispatch({type:'CHANGE_CATEGORY', val:key }),
     
    };
}
export default connect(null,dispatchAction) (Category);

