import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
import CartSummary from '../cart/CartSummary';

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar 
        // color="info" 
        dark 
        expand="md"
        style={{backgroundColor:'#082287'}}>
          <NavbarBrand>
            <Link to="/"
            style={{textDecoration:'none', color:'#fff', fontFamily:'sans-serif'}}>
              NORTHWIND REDUX
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/saveproduct"
                  style={{textDecoration:'none', color:'#fff'}}>
                      Add Product
                  </Link>
                </NavLink>
              </NavItem>
              <CartSummary style={{color:'#fff'}}/>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}