import { Button, Modal } from "react-bootstrap";
import React from 'react';
import { useState } from 'react';

// export function ExitModal({ showModal, closeModal }) {
export function ExitModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    };

    const handleShow = () => setShow(true);

    return (
        <Modal show={show} onHide={handleClose}>
        {/* <Modal show={showModal} onHide={closeModal}> */}
            <Modal.Header closeButton>
                <Modal.Title>Select reason to end class</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    End class
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
}