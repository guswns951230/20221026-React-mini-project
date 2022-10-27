import { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import DataContext from "../context/DataContext";

const NavbarComp = () => {
  const [login, setLogin] = useState(true);
  const data = useContext(DataContext);
  const navigate = useNavigate();

  // component가 mount 되자마자 login 정보 확인
  useEffect(() => {
    setLogin(data.state.user ? true : false);
  }, []);

  // Logout을 위한 이벤트 함수
  const onClickLogout = () => {
    setLogin(false); // conponent를 바꿔주기 위해 수정
    // user의 값을 null로
    data.action.setUser(null);
    // Logout시 항상 홈으로 돌아감
    navigate("/");
  };

  return (
    <div>
      {console.log(data)}
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
                  {data.state.user.name}'s MyPage
                </NavLink>
                <Button variant="outline-light" onClick={onClickLogout}>
                  Log out
                </Button>{" "}
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
