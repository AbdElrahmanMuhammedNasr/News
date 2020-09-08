import React, {Component} from "react";
import NewPost from "../UI/NewPost";
import NewPost2 from "../UI/NewPost2";
import Category from "./category";
import Welcome from "./welcome";
import axios from 'axios';
import {connect} from 'react-redux';
import Loading from "./loading";


export class BodyPage extends Component {
    state ={
        vertical: true,
        news :[]
    }
    componentDidMount(){
        this.state.news = [];
        axios.get(this.props.theUrl)
                .then(res =>{
                        this.setState({
                            news :res.data["articles"]
                        })
                })
                .catch(e=> console.log(e))
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.state.news = [];
        axios.get(this.props.theUrl)
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

                        this.state.news.length < 0 ? <Loading />  :
                        this.state.news.map(e=>{
                            return (
                                this.state.vertical
                                    ?<NewPost2 key={Math.random()} thePost={e}  />
                                    :<NewPost key={Math.random()} thePost={e} />

                            );
                        })
                    }
                </div>

            </div>
            </div>


        );
    }
}
const mapStateToProps = state =>{
    return {
        theUrl : state.url,
    };
}
export default connect(mapStateToProps) (BodyPage);
