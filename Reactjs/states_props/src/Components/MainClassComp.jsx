import { Component } from "react";

export class MainClassComp extends Component{
    constructor(){
        super()
        this.state = {
            fullName:"Alakuntla Venu",
            person:{
                fname: "venu",
                lname: "kumar",
                email: "venu123@gmail.com"
            },
            friends: ["Sam","Sandeep","HariKrishna"]
        }
    }
    render(){
        return <div>
            <h1> This is {this.state.fullName}</h1>
            <hr />
            <ul>
                {/* <li>My friend  name is: {this.state.friends[0]}</li>
                <li>just friend: {this.state.friends[1]}</li>
                <li>school friend: {this.state.friends[2]}</li> */}

                {this.state.friends.map((value)=>{
                    return <li> {value} </li>
                })}
            </ul>
            
                {Object.values(this.state.friends).map((val)=>{
                    return <ul>
                        <li>{val}</li>
                        </ul>
                })}
                {/* <ul>
                <li>My first name is {this.state.person.fname} </li>
                <li> My last name is {this.state.person.lname} </li>
                <li>My email id is {this.state.person.email} </li>
            </ul> */}
        </div>
    }
}