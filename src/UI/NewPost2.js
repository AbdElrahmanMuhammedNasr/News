import React, {Component} from "react";
import {NavLink} from "react-router-dom";

export class NewPost2 extends Component{

    render() {

        return (
            <div className="card mb-3"
                 style={{'maxWidth': '540px',
                     'maxHeight': '100vh',
                     'overflow': 'hidden',
                     'boxShadow':'0px 0px 10px gray'
                 }}>

                    <div className="card">
                        <NavLink to={{
                            pathname:'/postDetails',
                            post:this.props.thePost
                        }}>

                            <img src={this.props.thePost['urlToImage']} className="card-img-top" alt="..."style={{'height': '45vh', 'cursor': 'pointer',}}/>

                        </NavLink>
                            <div className="card-body">
                                <h5 className="card-title" style={{'fontFamily':'Teko'}}>{this.props.thePost.title}</h5>
                                <p className="card-text"><small className="text-muted">Published at: {this.props.thePost.publishedAt.replace('T',' ')}</small></p>
                            </div>

                    <div className="card-footer row justify-content-between" style={{'padding':'15px 10%'}}>
                             <div>
                                {/*<a href="#" className="text-muted">{this.props.thePost.author ?this.props.thePost.author : this.props.thePost.source.name}</a>*/}
                                <a href="#" className="text-muted">{this.props.thePost.source.name.split('.com')}</a>
                             </div>
                    </div>
                        </div>


            </div>

        );
    }
}
export default NewPost2;
