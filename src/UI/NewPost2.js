import React, {Component} from "react";
import news from '../asset/news.jpg';

export class NewPost2 extends Component{
    render() {
        return (
            <div className="card mb-3"
                 style={{'maxWidth': '540px',
                     'maxHeight': '100vh',
                     'overflow': 'hidden',
                     'cursor': 'pointer',
                     'boxShadow':'0px 0px 10px gray'
                 }}>

                    <div className="card">
                        <img src={news} className="card-img-top" alt="..." style={{
                            'height':'45vh'
                        }}/>
                            <div className="card-body">
                                <h5 className="card-title" style={{'fontFamily':'Teko'}}>Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>

                    <div className="card-footer row justify-content-between" style={{'padding':'15px 10%'}}>
                                <div><img src={news}
                                          style={{"width": '30px', 'height': '30px', 'borderRadius': '50%'}}/></div>
                                <div><a href="#" className="text-muted">Tamer Ali</a></div>
                            </div>
                        </div>


            </div>

        );
    }
}
export default NewPost2;
