import {Component} from "react";
import React from "react";
import news from "../asset/news.jpg";
import {NavLink} from "react-router-dom";
export class AllUserArtical extends Component {
        state ={
            userPost :[1,2,3,4,5,6,7,8,9]
        }
        componentDidMount() {
            console.log(this.props.location.data)

        }

    render() {
            return (
                // <div></div>
                <div className="container" style={{backgroundColor:''}}>
                    <h1>Author - Jessica Garcia</h1>
                    <p>16 articles</p>
                {
                    this.state.userPost.map(e=>{
                        return (
                            <div key={{e}} >

                                <div>
                                    <NavLink to={"/postDetails"}>
                                        <img src={news} style={{width:'60%',height:'60vh',borderRadius:'10px'}} alt=".."/>
                                    </NavLink>

                                </div>
                                <br/>
                                <p style={{'fontFamily':'Toke',fontWeight:'bolder',display:'inline',borderBottom:'3px solid gray'}}>Health</p>
                                <br/> <br/>
                                <h5>
                                    Why is taking a selfie still so popular?
                                </h5>
                                <br/>
                                <p style={{width:'60%'}}>
                                    Enthusiastically aggregate unique methodologies vis-a-vis
                                    ubiquitous human capital. Professionally envisioneer B2B catalysts
                                    for change before process-centric opportunities. Professionally incubate
                                    distributed services after parallel niche markets..
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
