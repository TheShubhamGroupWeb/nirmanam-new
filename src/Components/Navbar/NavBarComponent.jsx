import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../images/logo/mr.png'
import { useEffect, useState } from 'react';

import './NavbarStyle.css'

function NavBarComponent({isScoll}) {

  const [scroll, setScroll] = useState(false)
  const[height,setHeight]=useState(window.scrollY)

  useEffect(() => {
    if (parseInt(window.scrollY )> 50) {
        setScroll(true)
    } else {
        if (parseInt(window.scrollY) < 50) {
            setScroll(false)
        }
    }

}, [height])
useEffect(() => {
    window.addEventListener('scroll', () => {
        console.log(window.scrollY)
        setHeight(window.scrollY)
    }, true);
  }, []);


  return (
    // <Navbar expand="lg" className=" position-fixed z-3 w-100 " style={{backgroundColor: "none"}}> 

<Navbar expand="lg" className={scroll ? "navColor" : "navTransparent"} style={{backgroundColor: "none", position: "fixed", width: "100%", boxShadow: "3px 4px 4px 4px rgba(0,0,0,0.2)", padding: 0}}>         

      <Container fluid>
        <Navbar.Brand href="#"> <img src={Logo} alt="" className='img-fluid' style={{height: "70px", paddingLeft: "1rem"}}/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', padding: "0 1.5rem" }}
            navbarScroll 
          >
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              {/* <NavDropdown.Item href="#action3">Real Esate Trading</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Property Exchange
              </NavDropdown.Item> */}

              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="real-estate-property-trading">
              Real Estate Trading
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="real-estate-property-exchange">
              Property Exchange
              </NavDropdown.Item>

             
            </NavDropdown>


            <Nav.Link href="about">About</Nav.Link>
            
            <Nav.Link href="contact">Contact</Nav.Link>
         
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;