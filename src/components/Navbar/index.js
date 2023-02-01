import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

function NavBar() {
  return (
    <Container style={{ height: "72px", width: "1300px" }}>
      <Row>
        <Col xs={12} md={8}>
          <img
            className="logo"
            style={{
              width: "84px",
              height: "22.64px",
              left: "35px",
              top: "35px",
              marginTop: "2%",
            }}
            src="https://i.ibb.co/pncRRns/Logo.png"
            alt="TapFlow logo"
          />
        </Col>
        <Col xs={6} md={4}>
          <Form
            style={{
              position: "absolute",
              left: "77.62%",
              right: "5%",
              top: "-2%",
            }}
          >
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              style={{
                width: 256,
                height: 35,
                scrollMarginBlock: 50,
                background: "#D9D9D9",
                borderRadius: 50,
                padding: "0 10px",
                fontSize: 14,
                display: "inline-block",
              }}
            />
            <Button
              style={{
                background: "transparent",
                border: "none",
                padding: "5px",
                position: "absolute",
                right: "3.5vh",
                top:"5vh"
              }}
            >
              <FaSearch style={{ color: "#000" }} />
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default NavBar;
