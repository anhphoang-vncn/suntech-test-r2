import React, { useState, useContext } from 'react';
import '../styles/Data.css'
import ModalEditData from './ModalEditData';
import Button from 'react-bootstrap/Button';

const Data = ({ id, hoten, namsinh, handleDeleteData, handleEditData }) => {

    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
    }

    return (
        <div className="data hover-button">
            <div>
                <div>{id}</div>
                <div>{hoten}</div>
                <div>{namsinh}</div>
            </div>
            <div className="btn-content hover-button--on">
                <div><Button className='btn-edit' variant="success" onClick={() => {
                    setModalShow(true);
                    handleClick()
                }}>Edit</Button></div>
                <div><Button className='btn-delete' variant="danger" onClick={() => handleDeleteData(id)}>Del</Button></div>
            </div>
            <ModalEditData
                show={modalShow}
                onHide={() => setModalShow(false)}
                handleEditData={handleEditData}
                id={id}
                hoten={hoten}
                namsinh={namsinh}
            />
        </div>
    )
}

export default Data;