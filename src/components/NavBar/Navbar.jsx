import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Login from "../subcomponents/Login/loginButton.jsx";
import Logout from "../subcomponents/Login/logoutButton.jsx";
import ProfileButton from "../subcomponents/Profile/profileButton.jsx";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" style={{ width: "100vw" }}>
        <Container
          style={{
            width: "100%",
            backgroundColor: "rgb(90, 157, 87)",
            padding: "20px",
            borderRadius: "5px",
            maxWidth: "100%",
          }}
        >
          <Navbar.Brand
            style={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              borderRadius: "5px",
              padding: "10px",
            }}
            href="#home"
          >
            Bike The Big Apple
          </Navbar.Brand>
          <Nav>
            <Login />
            <ProfileButton />
            <Logout /> 
          </Nav>

        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
