import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import "./Header.scss";
import {
  useLocation /* other hooks */,
  useSearchParams,
  useParams,
  Link,
} from "react-router-dom";

export default function Index() {
  const [isOpen, setToggle] = useState(false);

  const location = useLocation();
  const params = useParams();
  console.log({ params });
  console.log(location);
  const toggle = () => {
    setToggle(!isOpen);
  };
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/about">About</Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/blog">Blog</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
