import React,{Component} from "react";
import loading from "./loading.gif"

class Spinner extends Component{
    render(){
        return(
            <div className="text-center">
                <img src={loading} alt="loading" style={{width:"30px",height:"30px"}}/>
            </div>
        )
    }
}

export default Spinner;