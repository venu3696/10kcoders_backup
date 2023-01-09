//  Actions

import { ADD_PERSON } from "./ActionTypes"

// Each action should return an object
export const addUserAction = () =>{
  return {
    type: "Add_USER",
    paload: "Rakesh", 
  }
}
export const deleteUserAction = (user)=>{
  return {
    type: "DELETE_USER",
    paload: user
  }
}
export const addPersonAction = (person)=>{
  return{
      type: ADD_PERSON ,
      paload: person 
  }
}
