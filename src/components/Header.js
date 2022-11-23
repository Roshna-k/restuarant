import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
        <Navbar  variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbp0OxXzrRkjDtK3Ge6X6goSmhJL1MoDmXKg&usqp=CAU"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            Cafe Metanova
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header