import './App.css';
import { useState } from 'react';
import InputForm from './components/InputForm'
import DataList from './components/DataList'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [data, setData] = useState([
    {
      id: "XXXXXXXXXXXXXXXXX",
      hoten: 'Họ tên',
      namsinh: 'Năm sinh'
    }
  ]);

  const addData = (id, hoten, namsinh) => {
    const newData = {
      id: id,
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
