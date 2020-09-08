import React, {Component} from "react";
import {NavLink} from "react-router-dom";

export class Haver extends Component {
    render() {
        return (
            <div className="" style={{
                "width":"80%",
                "margin":"auto"
            }}>
                <nav className="navbar navbar-expand-lg navbar-light row justify-content-between">
                    <NavLink className="navbar-brand" to={{pathname:'/'}} style={{'fontFamily':'Teko'}}>World NEWS</NavLink>
                    <div className="row justify-content-around" style={{"width":'60%'}}>
                        <input  className="form-control  w-75" placeholder="Search..."/>
                        <button className=" btn btn-primary">Search</button>
                    </div>
                    <a className="navbar-brand" href="www.facebook.com" style={{'fontFamily':'Teko'}}>
                        <span className="fa fa-user-circle-o"></span>
                    </a>
                </nav>
            </div>
        );
    }

}
export default Haver;

