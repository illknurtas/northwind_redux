import React, { Component } from 'react'
import { connect} from 'react-redux'

class CategoryList extends Component {
  render() {
    return (
      <div>
        <h1>categories</h1>
        <h5>Selected Category: {this.props.currentCategory}</h5>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer
  }
}

export default connect(mapStateToProps)(CategoryList);