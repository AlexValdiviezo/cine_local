import React, { Fragment, useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'

export const ModalMovie = ({open, setModalOpen, title, srcImg, desc}) => {
    return(
        <Fragment>
            <Modal isOpen={open}>
                <ModalHeader>
                    <h3>{title}</h3>
                </ModalHeader>

                <ModalBody>
                    <center><img src={srcImg}/></center>
                    <p>{desc}</p>
                </ModalBody>
            
                <ModalFooter>
                    <Button onClick={()=>{setModalOpen(false)}}>Cerrar</Button>
                </ModalFooter>
            </Modal>
        </Fragment>
    )
}