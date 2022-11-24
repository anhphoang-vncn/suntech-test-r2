import React, { useState, useContext } from 'react';
import '../styles/Data.css'
import ModelEditData from './ModelEditData';
import { Modal, Button } from 'react-modal';

const Data = ({ id, maso, hoten, namsinh, handleDeleteData, handleEditData }) => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div className="data hover-button">
            <div>
                <div>{maso}</div>
                <div>{hoten}</div>
                <div>{namsinh}</div>
            </div>
            <div className="btn-content hover-button--on">
                <div><button className='btn-edit' onClick={handleShow}>Edit</button></div>
                <div><button className='btn-delete' onClick={() => handleDeleteData(id)}>Del</button></div>
            </div>
            {/* <Modal show={show} onHide={handleClose}>
                <ModelEditData />
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
            </Modal> */}
        </div>
    )
}

export default Data;