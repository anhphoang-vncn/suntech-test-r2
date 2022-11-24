import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/ModalEditData.css'
import { useState } from 'react'

const ModalEditData = (props) => {
    const [hoten, setHoten] = useState(props.hoten);
    const [namsinh, setNamsinh] = useState(props.namsinh);

    const handleOnChangeHoten = (event) => {
        setHoten(event.target.value)
    }

    const handleOnChangeNamsinh = (event) => {
        setNamsinh(event.target.value)
    }

    const handleOnClickSave = (event) => {
        const editData = {
            id: props.id,
            hoten: hoten,
            namsinh: namsinh
        }
        props.handleEditData(props.id, editData);
        props.onHide()
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Cập nhật thông tin
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Họ tên</p>
                <input type="text" className="input-data-modal" value={hoten} onChange={handleOnChangeHoten} />
            </Modal.Body>
            <Modal.Body>
                <p>Năm sinh</p>
                <input type="text" className="input-data-modal" value={namsinh} onChange={handleOnChangeNamsinh} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Hủy</Button>
                <Button variant="primary" onClick={handleOnClickSave}>Lưu</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalEditData;
