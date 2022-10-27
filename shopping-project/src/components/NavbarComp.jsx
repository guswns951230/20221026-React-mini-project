import { useState } from "react";
import { NavLink } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const NavbarComp = () => {
  const [login, setLogin] = useState(true);
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            <FontAwesomeIcon icon={faShoppingBag} /> SHOP
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            {login ? (
              <Nav>
                {/* LogIn 시 출력 될 component */}
                <NavLink className="nav-link" to="/mypage">
                  {}'s MyPage
                </NavLink>
                <Button variant="outline-light">Log out</Button>{" "}
              </Nav>
            ) : (
              <div>
                {/* LogIn 실패 시 출력 될 component */}
                <Button variant="outline-light">Log In</Button>{" "}
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
