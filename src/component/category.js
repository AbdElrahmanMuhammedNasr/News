import React, {Component} from "react";

export class Category extends Component {
    render() {
        return (
            <div className="" style={{ 'margin':'auto' }}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="collapse navbar-collapse" >
                        <div className="navbar-nav">
                            <ul className="navbar-nav  ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="www.facebook.com">global</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="www.facebook.com"> Health</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="www.facebook.com"> Sports</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="www.facebook.com">Business</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="www.facebook.com">Art</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="www.facebook.com">Science</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="www.facebook.com">Lifestyle</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

}
export default Category;

