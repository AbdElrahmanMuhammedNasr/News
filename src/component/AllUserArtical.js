import {Component} from "react";
import React from "react";
import news from "../asset/news.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";
export class AllUserArtical extends Component {
        state ={
            userPost :[]
        }
        componentDidMount() {
            axios.get("http://newsapi.org/v2/top-headlines?country=eg&apiKey=69ebdeb9f7ce4f3eb2a2a925a4392ab8")
                .then(res =>{
                    const newData = res.data["articles"]
                    const filterData = [];
                        newData.map(e=>{
                        if (e.source.name.split('.com').toString() == this.props.location.userName.toString()){
                            if(e){
                                filterData.push(e)
                            }
                        }
                    })
                    this.setState({
                        userPost : filterData
                    })
                })
                .catch(e=> console.log(e))
        }


    render() {
            return (
                <div className="container" style={{backgroundColor:''}}>
                    <h1>Author - {this.props.location.userName}</h1>
                    <p>{this.state.userPost.length} articles</p>
                {
                    this.state.userPost.map(e=>{
                        return (
                            <div key={{e}} >

                                <div>
                                    <NavLink to={ {pathname: "/postDetails" ,post:e}} >
                                        <img src={e.urlToImage} style={{width:'60%',height:'60vh',borderRadius:'10px'}} alt=".."/>
                                    </NavLink>

                                </div>
                                <br/>
                                <p style={{'fontFamily':'Toke',fontWeight:'bolder',display:'inline',borderBottom:'3px solid gray'}}>Health</p>
                                <br/> <br/>
                                <h5 style={{width:'60%'}}>
                                    {e.title}
                                </h5>
                                <br/>
                                <p style={{width:'60%'}}>
                                    {e.description}
                                </p>
                                <hr/>
                            </div>
                        );
                    })
                }
                </div>

            );
        }
}
export default  AllUserArtical;
