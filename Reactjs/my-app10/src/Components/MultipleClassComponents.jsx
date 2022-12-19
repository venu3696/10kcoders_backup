import { Component } from "react";

export default class MainClassComponents extends Component{
    render(){
        return <h2>Hello from Main Class Component</h2>
    }
}
export class ChiladClassComponent extends Component{
    render(){
        return <h2> Hello from Child Class Component</h2>
    }
}
export class SiblingChildClassComp extends Component{
    render(){
        return <h3> Hello from Sibling Class Component</h3>
    }
}