import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Nav,Navbar} from 'react-bootstrap';
function Home() {
  return (
    <div>
        <div class="header1">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/GitCrud">GitCrud</Nav.Link>
            <Nav.Link href="/Create">Create</Nav.Link>
            <Nav.Link href="/Update">Update</Nav.Link>
         
            
          </Nav>
        </Container>
      </Navbar>
        
    </div>
    </div>
  )
}

export default Home