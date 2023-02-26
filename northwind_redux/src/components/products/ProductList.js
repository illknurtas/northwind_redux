import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, Table } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as productActions from "../../redux/actions/productActions";

class ProductList extends Component {
  componentDidMount(){
    this.props.actions.getProducts();
  }
  render() {
    return (
      <div>
        <Badge color='info'>
          {this.props.currentCategory.categoryName}
        </Badge>
        <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity Per Unit</th>
            <th>Unit in Stock</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.products.map(product=>(
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitInStock}</td>
              </tr>
            ))
          }
          
        </tbody>
      </Table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer
  }
}

function mapDispatchToProps(dispatch) {
  return { 
    actions:{
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      // changeProduct: bindActionCreators(productActions.changeProduct, dispatch),

    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);