import { Navbar, Nav, Container, Button, Modal } from "react-bootstrap";
import Timer from '../Timer/Timer';
import React from 'react';
import { useState, useRef } from 'react';
// import { Component } from 'react';
// import { ExitModal } from "../ExitModal";
import Checkbox from './../Checkbox';

// export default class NavbarElement extends Component {
export default function NavbarElement() {
    const [show, setShow] = useState(false);
    const childRef = useRef();

    const handleEndClass = () => {
        childRef.current.reset();
        setShow(false);
    }

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = () => setShow(true);

    // constructor() {
    //     super();
    //     this.state = {
    //         show: false
    //     }
    // }

    // handleClose = () => this.setState(prevState => ({ showModal: !prevState.showModal }));
    // handleShow = () => {
    //     console.log(this.state);
    //     this.setState(prevState => ({ showModal: !prevState.showModal }));
    //     console.log(this.show)
    // }

    // render() {
    //     const { showModal } = this.state;
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="home">
                        <img alt="codingal-logo" src="https://cdn.codingal.com/images/logos/logos-main/logo-with-text.svg"></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav.Link>Trial lesson [Grade 1-3]</Nav.Link>
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Nav.Link href="passengers">Passengers</Nav.Link>
                            <Nav.Link href="posts">Posts</Nav.Link>
                            <Nav.Link><Timer ref={childRef} minutes={10} /></Nav.Link>
                            <Button className="codingal-button" onClick={handleShow}>End class</Button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Select reason to end class</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Checkbox></Checkbox>
                                </Modal.Body>
                                <Modal.Footer className="modal-footer">
                                    <Button onClick={handleEndClass}>
                                        End class
                                    </Button>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Cancel
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            {/* <ExitModal showModal={showModal} closeModal={this.handleClose}></ExitModal> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
}
// }