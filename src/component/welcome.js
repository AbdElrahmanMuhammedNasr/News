import React, {Component} from "react";
import news from '../asset/news.jpg';

export class Welcome extends Component {
        render (){
            return (
                <div className="row" style={{ 'overflow':'hidden',}}>
                        <section className="col-sm-6 "style={{ "height":'50vh','backgroundColor' : '#4D464F',"color":'white','paddingRight':'0','paddingLeft':'0'}}>
                            <div style={{'width':"50%", "margin":"auto",'paddingTop':'10%','backgroundColor' : ''}}>
                                <h3 style={{'fontFamily':'Teko'}}>How many eye color variations are there? </h3>
                                <p>Interactively unleash extensive infrastructures 
                                    via emerging markets. Credibly customize interdependent
                                     manufactured products via real-time methods of empowerment.
                                      Interactively enhance business...
                                </p>
                                <button className="btn btn-primary">Read More</button>
                            </div>
                         
                        </section>

                        <section className="col-sm-6 "style={{ "height":"50vh",'backgroundColor' : '','paddingRight':'0','paddingLeft':'0'}}>
                            <img src={news} alt="news" style={{"width":'100%', 'height':'100%'}}/>
                        </section>
                </div>

            );
        }
}   
 export default Welcome;
