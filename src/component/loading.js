import React from "react";
const Loading = ()=>{
    return (
        <div className="" style={{width:'10%',margin:'auto'}}>
            <div className="spinner-border" role="status" style={{fontSize:'200px'}} >
                <span  className="sr-only">Loading...</span>
            </div>
            {/*<div className="spinner-grow" role="status">*/}
            {/*    <span className="sr-only">Loading...</span>*/}
            {/*</div>*/}
        </div>
    );
}

export default Loading;
