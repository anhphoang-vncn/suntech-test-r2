import React from 'react';
import { useState } from 'react'
import '../styles/InputForm.css';
import { nanoid } from 'nanoid';
import Button from 'react-bootstrap/Button';

const InputForm = ({ handleAddData }) => {
    const [id, setId] = useState(nanoid());
    const [hoten, setHoten] = useState('');
    const [namsinh, setNamsinh] = useState('');

    const handleChangeHoten = (event) => {
        setHoten(event.target.value);
    }

    const handleChangeNamsinh = (event) => {
        setNamsinh(event.target.value);
    }

    const handleAddClick = (event) => {
        handleAddData(id, hoten, namsinh);
        setId(nanoid())
        setHoten('');
        setNamsinh('');
    }

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            handleAddClick();
        }
    }

    return (
        <div className="input-form">
            <div className="input-center">
                <span className="input-containers">Mã số{" "}<input type="text" className="input-data" value={id} disabled></input></span>
                <span className="input-containers">Họ tên{" "}<input autoFocus type="text" className="input-data" value={hoten} onChange={handleChangeHoten} onKeyPress={handleEnter}></input></span>
                <span className="input-containers">Năm sinh{" "}<input type="text" className="input-data" value={namsinh} onChange={handleChangeNamsinh} onKeyPress={handleEnter}></input></span>
            </div>
            <Button className="btn-add" onClick={handleAddClick}>Lưu</Button>
        </div>
    )
}

export default InputForm;