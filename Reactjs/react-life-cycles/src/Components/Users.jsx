import React, { Component } from 'react';
import Recipe from './Recipe';
import axios from 'axios';

export default class Users extends Component {
    constructor(props){
        super(props)
        this.state = {
            recipe: []
        }
    }
    render() {
        return (
            <div className='container' style={{display:"flex"}}>
                {this.state.recipe.map((user,i)=>  <Recipe key={i} {...user} recipeDetails = {user} /> )}
            </div>
        );
    }
  //  *** diffetent ways to Get the data from API
    async componentDidMount(){
        // let data = await (await fetch("http://localhost:3021/recipes")).json()
        // console.log(data);
        // this.setState({recipe:data})


        // axios.get("http://localhost:3021/recipes").then((res)=>{
        //     console.log(res);
        // })


        let resp = await axios.get("http://localhost:3021/recipes")
        // console.log(resp);
        this.setState({recipe:resp.data})
    }
}

