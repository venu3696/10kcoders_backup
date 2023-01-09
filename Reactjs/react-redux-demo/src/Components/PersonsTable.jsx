import React, { Component } from 'react'
import { connect } from 'react-redux'

 class PersonsTable extends Component {
  render() {
    return (
      <div>PersonsTable</div>
    )
  }
}
function mapStateToProps(){
    return{

    }
}
function mapDispatchToProps(){
    return{

    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(PersonsTable)
