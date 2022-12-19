import { Component } from "react";

class Header extends Component{
    constructor(props) {
        super()
    }
        render(){
            return <div>
                <button onClick = {this.props.handleChange}> Change Message</button>
                <p  style={{background:"grey",color:"white", padding:"10",fontWeight:"bold"}}>
                {this.props.message}
                </p>
            </div>
        }
}
export default Header