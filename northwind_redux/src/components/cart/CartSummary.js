import React, { Component } from 'react';
import { 
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu, 
    DropdownItem, 
    NavItem,
    NavLink,
    Badge} from 'reactstrap';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import * as cartActions from "../../redux/actions/cartActions";
import {Link} from "react-router-dom";
import alertify from "alertifyjs";
import {Trash} from "react-bootstrap-icons";


class CartSummary extends Component {
    removeFromCart(product){
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName+" is deleted from cart",2);
    }
    renderEmpty(){
        return(
            <NavItem dark>
                <NavLink style={{color:'#fff'}}>
                    Cart is Empty
                </NavLink>
            </NavItem>
        )
    }
    renderSummary(){
        return(
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{color:'#fff'}}>
                    Your Cart
                </DropdownToggle>
                <DropdownMenu end>
                    {
                        this.props.cart.map( 
                            cartItem =>(
                                <DropdownItem key={cartItem.product.id}>
                                   
                                    {cartItem.product.productName}
                                    <Badge color='success'
                                    className='mx-1'>
                                        {cartItem.quantity}
                                    </Badge> 
                                    <Badge 
                                    color="danger"
                                    onClick={()=>this.removeFromCart(cartItem.product)}>
                                        <Trash/>
                                    </Badge>
                                </DropdownItem>
                            )
                        )
                    }
                    <DropdownItem divider />
                    <DropdownItem>
                        <Link to="/cart"
                        style={{textDecoration:'none', color:'#3d3d3d'}}> 
                            Go To Cart
                        </Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
    
  render() {
    return (
      <div>
        {
            this.props.cart.length>0 ? this.renderSummary() : this.renderEmpty()
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

function mapDispatchToProps(dispatch) {
    return{
        actions:{
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);