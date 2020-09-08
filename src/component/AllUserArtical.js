import {Component} from "react";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {connect} from 'react-redux';
export class AllUserArtical extends Component {
        state ={
            userPost :[]
        }
        componentDidMount() {
            axios.get(this.props.theUrl)
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
                                <br/>
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
const  reducerToMap = state =>{
    return {
        theUrl:state.url
    };
}
export default connect(reducerToMap)  (AllUserArtical);
