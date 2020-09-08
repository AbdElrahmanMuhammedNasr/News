import React from 'react';
import {Component} from "react";
import user from '../asset/abdo.jpg';
import news from '../asset/news.jpg'
import {NavLink} from "react-router-dom";

export class PostDetails extends Component {

    goToUserArticels = (name) =>{
        console.log(name)
        // console.log(this.props)
        // this.props.history.push({ pathname: '/userArticle',data: [{id:'hi'}] })

    }
    componentDidMount() {
        console.log(this.props.location.post)
    }

    render() {
        return (
            <div className="" style={{'width':'60%','margin':'auto','backgroundColor':' ','padding':'2%'}}>
                <p style={{'fontFamily':'Toke',fontWeight:'bolder',display:'inline',borderBottom:'3px solid gray'}}>Health</p>
                <hr/>

                <h1>{this.props.location.post.title}</h1>
                <hr/>

                <div className="row" style={{backgroundColor:"",padding:'0px 6%'}}>
                    <img src={user} style={{
                        "width":'50px',
                        "height":'50px',
                        "borderRadius":'50%'
                    }}/>
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
                    <img src={this.props.location.post.urlToImage} style={{width:'100%',height:'80vh',borderRadius:'10px'}}/>
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
                    <div className="p-2"><NavLink className="btn btn-secondary" to={{}} >Life</NavLink> </div>
                    <div className="p-2"><NavLink className="btn btn-secondary" to={{}}>Health</NavLink></div>
                    <div className="p-2"><NavLink className="btn btn-secondary" to={{}}>Gym</NavLink></div>
                </div>
                <br/><br/><br/><br/><br/>

                <div className='row' style={{boxShadow:'0px 0px 20px gray',padding:'30px'}}>
                    <img className="" src={user} style={{
                        "width":'150px',
                        "height":'150px',
                        "borderRadius":'50%'
                    }}/>
                    <section style={{width:'50%'}} className="offset-1">
                        <p style={{
                            fontFamily:'Toke',
                        }}> Written by</p>
                        <p style={{
                            fontFamily:'Toke',
                            fontWeight:'bolder',
                            fontSize:'30px'
                        }}> AbdElrahman Nasr</p>

                        <p style={{
                            fontFamily:'Toke',
                            fontWeight:'bold',
                        }}>Deep thinker. Like talking about the world,
                            religion and politics. I love playing tennis,
                            running and watching cat videos. Coffee is my friend.</p>
                        <button className="btn btn-primary" onClick={()=>this.goToUserArticels("Abdo")}>View All Artical</button>
                    </section>


                </div>
            </div>
        );
    }

}
export default PostDetails;
