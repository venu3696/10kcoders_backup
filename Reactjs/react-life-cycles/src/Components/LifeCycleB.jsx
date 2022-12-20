import React, { Component } from 'react';

export default class LifeCycleB extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
        console.log("Life Cycle B constructor triggered");
    }
    render() {
        console.log("LifeCycleB render triggered")

        return (
            <div>
                <h2>{this.props.msg}</h2>
            </div> 
        );
    }
    shouldComponentUpdate(){
        console.log("LifeCycleB shouldComponentUpdate Triggered");
        return false
    }
    componentDidUpdate(){
        console.log("LifeCycleB componentDidUpdate Triggered");
    }
    componentWillUnmount(){
        console.log("LifeCycleB componentWillUmount triggered");
    }
}


