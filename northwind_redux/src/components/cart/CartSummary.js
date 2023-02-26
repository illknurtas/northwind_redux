import React, { Component } from 'react';
import { UncontrolledDropdown,DropdownToggle,DropdownMenu, DropdownItem, NavItem, NavLink, Badge  } from 'reactstrap';
import {connect} from "react-redux";

class CartSummary extends Component {
    renderEmpty() {
        return (
            <NavItem>
                <NavLink>
                    Cart is empty
                </NavLink>
            </NavItem>
        )
    }
    renderSummary (){
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Your Cart
            </DropdownToggle>
            <DropdownMenu end>
                {
                    this.props.cart.map(cartItem => (
                        <DropdownItem key={cartItem.product.id}>
                            {cartItem.product.productName}
                            <Badge color='success'>
                                {cartItem.quantity}
                            </Badge>
                        </DropdownItem>
                    ))
                }
                <DropdownItem divider />
                <DropdownItem>
                    Go To Cart
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    }
  render() {
    return (
      <div>
        {
            this.props.cart.length>0?this.renderSummary():this.renderEmpty()
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

export default connect(mapStateToProps)(CartSummary);