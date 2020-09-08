import React from 'react';
import {Route} from "react-router";
import {Component} from "react";
import Haver from "../component/Hover";
import BodyPage from "../component/BodyPage";
import PostDetails from "../component/PostDetails";
import AllUserArtical from "../component/AllUserArtical";

export class Container  extends Component{
        render() {
            return (
                <div style={{'overflow':'hidden'}}>
                    <Haver/>
                    {/* i have remove category and welcome to body page */}
                    <switch>
                        <Route path='/' exact component={BodyPage} />
                        <Route path='/postDetails' component={PostDetails}/>
                        <Route path='/userArticle' component={AllUserArtical}/>
                    </switch>


                </div>
            );
        }
}
export default Container;
