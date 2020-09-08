import React, {Component} from "react";
import news from '../asset/news.jpg'
import {NavLink} from "react-router-dom";


export class NewPost extends Component{
    render() {
        return (
            <div className="card mb-4"
                 style={{'maxWidth': '540px',
                     'maxHeight': 'auto',
                     'overflow': 'hidden',
                     'boxShadow':'0px 0px 10px gray'
                 }}>

                <div className="row ">
                    <div className="col-md-4">
                        <NavLink to={{
                            pathname:'postDetails',
                            post:this.props.thePost

                        }}>
                            <img src={this.props.thePost.urlToImage} className="card-img" alt="..." style={{
                            'height':'100%', 'cursor': 'pointer',
                            }}/>
                      </NavLink>

                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title" style={{'fontFamily':'Teko'}}>{this.props.thePost.title}</h5>
                            <p className="card-text"><small className="text-muted">Published {this.props.thePost.publishedAt}</small></p>
                            <div className="card-footer row justify-content-between">
                                <a href="#" className="text-muted">{this.props.thePost.source.name.split('.com')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default NewPost;
