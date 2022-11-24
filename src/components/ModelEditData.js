import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';

const ModelEditData = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Mã số .."
                    name="maso"
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Họ tên .."
                    name="hoten"
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Năm sinh .."
                    name="namsinh"
                    required
                />
            </Form.Group>
        </Form>
    )
};

export default ModelEditData;