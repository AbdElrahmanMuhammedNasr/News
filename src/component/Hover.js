import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import axios from "axios";

export class Haver extends Component {
    state ={
        search :'',
    }
    changeSearch = (event)=>{
        this.setState({
            ...this.state,
            search : event.target.value
        })
    }
    getCode(con){
        let  code = null ;
        axios.get('https://restcountries.eu/rest/v2/name/'+con)
            .then(res=>{
                 code = res.data[0]['topLevelDomain'][0].toString().replace('.','')
                 // console.log(code)
                 this.props.searchCountry(code)
            })

    }

    render() {
        return (
            <div className="" style={{
                "width":"80%",
                "margin":"auto"
            }}>
                <nav className="navbar navbar-expand-lg navbar-light row justify-content-between">
                    <NavLink className="navbar-brand" to={{pathname:'/'}} style={{'fontFamily':'Teko'}}>World NEWS</NavLink>
                    <div className="row justify-content-around" style={{"width":'60%'}}>
                        <input  className="form-control  w-75" placeholder="Search..." onChange={(event)=>this.changeSearch(event)} value={this.state.search}/>
                        <button className=" btn btn-primary" onClick={()=> this.getCode (this.state.search)}>Search</button>
                    </div>
                    <a className="navbar-brand" href="www.facebook.com" style={{'fontFamily':'Teko'}}>
                        <span className="fa fa-user-circle-o"></span>
                    </a>
                </nav>
            </div>
        );
    }

}
const searchForReducer = dispatch =>{
    return {
        searchCountry : (key)=> dispatch({type:'SEARCH',val:key}),
    };
}
export default connect(null,searchForReducer) (Haver);

