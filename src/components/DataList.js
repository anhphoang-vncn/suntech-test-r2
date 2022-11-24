import React from 'react';
import '../styles/DataList.css';
import Data from './Data'

const DataList = ({ data, handleDeleteData, handleEditData }) => {
    return (
        <div className="data-list">
            {data.map((data) => (<Data handleEditData={handleEditData} handleDeleteData={handleDeleteData} id={data.id} hoten={data.hoten} namsinh={data.namsinh} />))}
        </div>
    )
}

export default DataList;