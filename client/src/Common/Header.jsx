import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export default function Header() {
    return (
        <>
            <Navbar variant="dark" className='navbar'>
                <Container>
                    <Navbar.Brand href="#home" className='link-secondary'>Eventus Techsol</Navbar.Brand>
                    <Nav className="my-auto">
                        <Nav.Link href="#home" className='link-secondary'>Home</Nav.Link>
                        <Nav.Link href="#features" className='link-secondary'>Charts</Nav.Link>
                        <Nav.Link href="#pricing" className='link-secondary'>Admin</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
