import React from 'react';
import {Component} from "react";
import user from '../asset/abdo.jpg';
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';

export class PostDetails extends Component {

    goToUserArticels = (name) =>{
        this.props.history.push({ pathname: '/userArticle',userName: name})

    }
    componentDidMount() {
        localStorage.setItem("post",this.props.location.post)
        // console.log(this.props.location.post)
        // console.log(localStorage.getItem("post"))
    }

    render() {
        return (
            <div className="" style={{'width':'60%','margin':'auto','backgroundColor':' ','padding':'2%'}}>
                <p style={{'fontFamily':'Toke',fontWeight:'bolder',display:'inline',borderBottom:'3px solid gray'}}>{this.props.theCategory}</p>
                <hr/>

                <h1>{this.props.location.post.title}</h1>
                <hr/>

                <div className="row" style={{backgroundColor:"",padding:'0px'}}>
                    <p style={{
                        margin: 'auto 10px',
                        fontFamily:'Toke',
                        fontWeight:'bolder'
                    }}> <small> name </small>: {this.props.location.post.source.name.split('.com')} </p>

                    <p style={{
                        margin: 'auto 10px',
                        fontFamily:'Toke',
                        fontWeight:'bolder'
                    }}><small> Author </small>: {this.props.location.post.author ? this.props.location.post.author :"UnKnow"}</p>
                </div>
                <hr/>

                <div>
                    <img src={this.props.location.post.urlToImage} style={{width:'100%',height:'80vh',borderRadius:'10px'}} alt=".."/>
                </div>
                <div style={{marginTop:'30px'}}>
                    <h5 style={{
                        margin: 'auto',
                        fontFamily:'Toke',
                        fontWeight:'bolder',
                    }}>  {this.props.location.post.description}  </h5>
                    <hr/>
                    <p style={{
                        margin: 'auto',
                        fontFamily:'Toke',
                        fontWeight:'bolder',
                    }}>{this.props.location.post.content}  </p>



                </div>
                <br/><br/><br/><br/><br/>
                <h5>TAGGED AS</h5>

                <div className="d-flex">
                    <div className="p-2"><NavLink className="btn btn-secondary" to={{}} >{this.props.theCategory}</NavLink> </div>
                </div>
                <br/><br/><br/><br/><br/>

                <div className='row' style={{boxShadow:'0px 0px 20px gray',padding:'30px'}}>
                    <img className="" src={user} style={{
                        "width":'150px',
                        "height":'150px',
                        "borderRadius":'50%'
                    }} alt=".."/>
                    <section style={{width:'50%'}} className="offset-1">
                        <p style={{
                            fontFamily:'Toke',
                        }}> Written by</p>
                        <p style={{
                            fontFamily:'Toke',
                            fontWeight:'bolder',
                            fontSize:'30px'
                        }}> {this.props.location.post.author ? this.props.location.post.author :this.props.location.post.source.name.split('.com') }</p>

                        <p style={{
                            fontFamily:'Toke',
                            fontWeight:'bold',
                        }}>Deep thinker. Like talking about the world,
                            religion and politics.</p>
                        <button className="btn btn-primary" onClick={()=>this.goToUserArticels(this.props.location.post.source.name.split('.com'))}>View All Artical</button>
                    </section>


                </div>
            </div>
        );
    }

}
const reducerToMap = state =>{
    return {
       theCategory: state.category
    };
}
export default connect(reducerToMap) (PostDetails);
