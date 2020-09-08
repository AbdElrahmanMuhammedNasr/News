import React, {Component} from "react";
import NewPost from "../UI/NewPost";
import NewPost2 from "../UI/NewPost2";
import Category from "./category";
import Welcome from "./welcome";
import axios from 'axios';


export class BodyPage extends Component {
    state ={
        vertical: true,
        news :[]
    }
    componentDidMount(){
            // axios.get("http://newsapi.org/v2/top-headlines?country=gb&apiKey=69ebdeb9f7ce4f3eb2a2a925a4392ab8")
            axios.get("http://newsapi.org/v2/top-headlines?country=eg&apiKey=69ebdeb9f7ce4f3eb2a2a925a4392ab8")
            // axios.get("http://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=69ebdeb9f7ce4f3eb2a2a925a4392ab8")
            // axios.get("http://newsapi.org/v2/top-headlines?country=au&apiKey=69ebdeb9f7ce4f3eb2a2a925a4392ab8")
                .then(res =>{
                        this.setState({
                            news :res.data["articles"]
                        })
                })
                .catch(e=> console.log(e))
    }
    toggleView =()=>{
        this.setState({
            ...this.state,
            vertical : !this.state.vertical,
        })
    }
    render (){
        return (
            <div>
                <Welcome />
                <Category />
            <div className="" style={{"width":'90%', "margin":'auto'}}>

                <span
                    onClick={this.toggleView}
                    className= { this.state.vertical ? "fa  fa-toggle-off d-flex justify-content-end" :"fa  fa-toggle-on d-flex justify-content-end"}
                    style={{
                    'fontSize':"30px",
                     'color':this.state.vertical ? "":'blue',
                    "cursor":'pointer'
                }}></span>


                <br/>
                <div className=" row justify-content-between">
                    {
                        this.state.news.map(e=>{
                            return (
                                this.state.vertical
                                    ?<NewPost2 key={{e}} thePost={e} />
                                    :<NewPost key={{e}} thePost={e} />

                            );
                        })
                    }
                </div>

            </div>
            </div>


        );
    }
}
export default BodyPage;
