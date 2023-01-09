import { ADD_PERSON } from "./ActionTypes"

const defaultState = {
  users:["Venu", "Sam", "Sandeep", "Praveen", "Mani"],
  persons:[],
  books:[],
  products:[]
}
export const  reducer = (state = defaultState,action)=>{
    switch (action.type){
      case "Add_USER" :
    let newUsers = [...state.users]
    newUsers.push(action.paload)
    return {...state,users:newUsers}
    case "DELETE_USER":
      let updatedUsers =  state.users.filter((user)=>user !== action.paload)
      return {...state,users:updatedUsers}

      case ADD_PERSON:
        let newPersons=[...state.persons];
        newPersons.push(action.paload);
        return {...state,persons:newPersons}
      default:
        return state
    }
  
          // Create a User
          // Read a User
          // Update a User
          // Delete a User
  }