import React, {Component} from "react";
import NewPost from "../UI/NewPost";
import NewPost2 from "../UI/NewPost2";


export class BodyPage extends Component {
    state ={
        vertical: true,
        news :[1,2,3,4,5,6,7,8,9,10,11,12,13,14,55,885,60,95,50,200]
    }
    toggleView =()=>{
        this.setState({
            ...this.state,
            vertical : !this.state.vertical,
        })
    }
    render (){
        return (
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


        );
    }
}
export default BodyPage;
