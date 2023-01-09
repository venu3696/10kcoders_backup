import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addUserAction, deleteUserAction} from './Actions'

 class User extends Component {
    render() {
        console.log(this.props)
        return (  
        <div>   
           
              </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state);
    return {
        allUsers: state.users,
    }
}
function mapDispatchToProps(dispatch){
    return{
        addUser: () => dispatch(addUserAction()),
        deleteUser:(user)=> dispatch(deleteUserAction(user))
    }
}
// console.log(connect)
//  export default User
export default connect(mapStateToProps, mapDispatchToProps)(User)
