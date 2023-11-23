import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function AddStudent() {
    const navigate = useNavigate();

    // Use a single state object for all student fields
    const [student, setStudent] = useState({
        name: '',
        surname: '',
        phone: '',
        address: '',
        link: '',
        groups: 'ВТиПО', // Default group value
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Update the student state with the new value
        setStudent((prevStudent) => ({
            ...prevStudent,
            [name]: value,
        }));
    };

    const addStudent = async (event) => {
        event.preventDefault();
        try {
            // Send the 'student' object to the server
            await axios.post('http://localhost:8081/api/v1/saveStudent', student);
            alert('Student has been added!');
            // Reset student state to initial values
            setStudent({
                name: '',
                surname: '',
                phone: '',
                address: '',
                link: '',
                groups: 'ВТиПО',
            });
        } catch (err) {
            // Handle errors and show a user-friendly message
            alert('Failed to add the student. Please try again.');
        }
    };

    const back = () => {
        navigate('/Main');
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div style={{ width: '25%' }}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Student name"
                        name="name"
                        aria-label="Student name"
                        aria-describedby="basic-addon1"
                        value={student.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        name="surname"
                        aria-label="Last name"
                        aria-describedby="basic-addon1"
                        value={student.surname}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Phone number"
                        name="phone"
                        aria-label="Phone number"
                        aria-describedby="basic-addon1"
                        value={student.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        name="address"
                        aria-label="Address"
                        aria-describedby="basic-addon1"
                        value={student.address}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Instagram"
                        name="link"
                        aria-label="Instagram"
                        aria-describedby="basic-addon1"
                        value={student.link}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group mb-3">
                    <select className="form-select" name="groups" aria-label="Default select example" value={student.groups} onChange={handleChange}>
                        <option value="ВТиПО">ВТиПО</option>
                        <option value="ИС">ИС</option>
                        <option value="ИБ">ИБ</option>
                    </select>
                </div>
                <div className="input-group mb-3 justify-content-center align-items-center">
                    <button className="btn btn-dark me-3" onClick={back}>
                        Back
                    </button>
                    <button className="btn btn-dark" onClick={addStudent}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}
