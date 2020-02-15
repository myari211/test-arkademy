import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form ,FormControl, Button, Container, Image} from 'react-bootstrap'
import Logo from '../assets/img/logo.png'

class SearchBar extends Component {
    render(){
        return(
            
        <Navbar bg="white" expand="lg" className="shadow-sm d-flex" >
            <Container>

       
                <Form inline className="flex-1 d-flex justify-content-between w-full" style={{width: "100%"}}  >
                <Navbar.Brand href="#home" >
                    <Image src={Logo} style={{width: 100}} ></Image>
                </Navbar.Brand>
                    <FormControl type="text" style={{width: 800}} placeholder="Search" className="mr-sm-2 ml-4" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Container>

        </Navbar>

        )
    }
}

export default SearchBar;