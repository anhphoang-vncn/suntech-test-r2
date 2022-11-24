import React from 'react';
import { useState } from 'react'
import '../styles/InputForm.css';

const InputForm = ({ handleAddData }) => {
    const [maso, setMaso] = useState('');
    const [hoten, setHoten] = useState('');
    const [namsinh, setNamsinh] = useState('');

    const handleChangeMaso = (event) => {
        setMaso(event.target.value);
    }

    const handleChangeHoten = (event) => {
        setHoten(event.target.value);
    }

    const handleChangeNamsinh = (event) => {
        setNamsinh(event.target.value);
    }

    const handleAddClick = (event) => {
        handleAddData(maso, hoten, namsinh);
        setMaso('');
        setHoten('');
        setNamsinh('');
    }

    return (
        <div className="input-form">
            <div>
                <span className="input-containers">Mã số{" "}<input type="text" className="input-data" value={maso} onChange={handleChangeMaso}></input></span>
                <span className="input-containers">Họ tên{" "}<input type="text" className="input-data" value={hoten} onChange={handleChangeHoten}></input></span>
                <span className="input-containers">Năm sinh{" "}<input type="text" className="input-data" value={namsinh} onChange={handleChangeNamsinh}></input></span>
            </div>
            <button className="btn-add" onClick={handleAddClick}>Lưu</button>
        </div>
    )
}

export default InputForm;