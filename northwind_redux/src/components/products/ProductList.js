import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, Button, Table } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs";
import {Link} from "react-router-dom";


class ProductList extends Component {
  
  componentDidMount(){
    this.props.actions.getProducts();
  }
  addToCart =(product)=>{
    this.props.actions.addToCart({
      quantity:1,
      product
    });
    alertify.success(product.productName+" added to cart",2);
  }
  render() {
    return (
      <div>
        <h3 className='my-2'
        style={{color:'#2f438e'}}>
          {this.props.currentCategory.categoryName}
        </h3>
        <Table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity Per Unit</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.products.map(product=>(
              <tr key={product.id}>
                <td>
                  <Link to={"/saveproduct/"+product.id}
                  style={{textDecoration:'none', color:'#666', fontWeight:'bold'}}>
                      {product.productName}
                  </Link>
                </td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>
                  <Button color='danger'
                  onClick={()=>
                    this.addToCart(product)
                  }>
                    Add
                  </Button>
                </td>
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
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);