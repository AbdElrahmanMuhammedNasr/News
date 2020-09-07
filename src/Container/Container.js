import React from 'react';
import {Component} from "react";
import Haver from "../component/Hover";
import Welcome from '../component/welcome';
import Category from '../component/category';
import BodyPage from "../component/BodyPage";

export class Container  extends Component{
        render() {
            return (
                <div style={{'overflow':'hidden'}}>
                  <Haver/>
                  <Welcome />
                  <Category />
                  <BodyPage />
                </div>
            );
        }
}
export default Container;
