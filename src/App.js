import './App.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import InputForm from './components/InputForm'
import DataList from './components/DataList'

function App() {
  const [data, setData] = useState([
    {
      id: nanoid,
      maso: 'Mã số',
      hoten: 'Họ tên',
      namsinh: 'Năm sinh'
    }
  ]);

  const addData = (maso, hoten, namsinh) => {
    const newData = {
      id: nanoid(),
      maso: maso,
      hoten: hoten,
      namsinh: namsinh
    }
    const newDatas = [...data, newData];
    setData(newDatas)
  }

  const deleteData = (id) => {
    const newDatas = data.filter((data) => data.id !== id)
    setData(newDatas);
  }

  const editData = (id, editedData) => {
    setData(data.map((data) => data.id === id ? editedData : data))
  }

  return (
    <div className="App">
      <InputForm handleAddData={addData} />
      <DataList
        data={data}
        handleDeleteData={deleteData}
        handleEditData={editData}
      />
    </div>
  );
}

export default App;
