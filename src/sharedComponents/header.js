import React from 'react';
import { Navbar, Button, Nav } from 'react-bootstrap';

class Header extends React.Component {

    render () {
        return (
            <div className='mb-5'>
                {/* {this.renderHeader()} */}
                <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Button variant="outline-light" onClick={this.onSubmit}>Login</Button>
            </Navbar>
            </div>
        )
    }
};

export default Header;