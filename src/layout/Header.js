import React, {useState} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container,
    Button
} from "reactstrap";
import logo from "../assets/images/logo.png";
import shoppingBag from "../assets/images/icons/shopping-bag-2.png";


const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
      <div>
        <Navbar className="navbar-fixed" color="transparent" light expand="md">
          <Container>
            <NavbarBrand href="/">
              <img src={logo}/>
            </NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Products</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">FAQ</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">
                    <img src={shoppingBag}/>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">
                    <Button color="primary">Start Here</Button>
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                        EN
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                                        Option 1
                    </DropdownItem>
                    <DropdownItem>
                                        Option 2
                    </DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem>
                                        Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Example;