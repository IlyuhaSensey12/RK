import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ShowAllStudents() {
    const navigate = useNavigate();

    const [editedStudent, setEditedStudent] = useState({
        id: '',
        name: '',
        surname: '',
        phone: '',
        address: '',
        link: '',
        groups: '',
    });

    const [students, setStudents] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false); // Track if in edit mode

    const fetchStudents = async () => {
        try {
            const response = await axios.get('http://localhost:8081/api/v1/listStudents');
            setStudents(response.data);
            console.log(response.data);
        } catch (err) {
            console.error('Failed to fetch the list of students:', err);
        }
    };

    const editStudent = (id) => {
        const studentToEdit = students.find(student => student.id === id);
        setEditedStudent({
            ...studentToEdit,
        });
        setIsEditMode(true); // Display the edit form
    };

    const saveEditedStudent = async () => {
        try {
            await axios.put(`http://localhost:8081/api/v1/updateStudent`, editedStudent);
            setStudents(prevStudents =>
                prevStudents.map(student => (student.id === editedStudent.id ? editedStudent : student))
            );
            console.log('Student edited successfully');
            alert('Student edited successfully');
            setEditedStudent({
                id: '',
                name: '',
                surname: '',
                phone: '',
                address: '',
                link: '',
                groups: '',
            });
            setIsEditMode(false);
        } catch (err) {
            console.error('Failed to edit student:', err);
        }
    };

    const deleteStudent = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/api/v1/deleteStudent/${id}`);
            setStudents(prevStudents => prevStudents.filter(student => student.id !== id));
            console.log('Student deleted successfully');
            alert('Student deleted successfully');
        } catch (err) {
            console.error('Failed to delete student:', err);
        }
    };

    useEffect(() => {
        console.log('Fetching students...');
        fetchStudents();
    }, []);

    const back = () => {
        navigate('/Main');
    };

    return (
        <div className="container mt-5" style={{height: '80vh',
            overflowY: 'scroll',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            // alignItems: 'center',
            width: '60%',}}>
            <div><h2 className="text-center mb-4">List of students</h2></div>
            <ul className="list-group"
            style={{
                justifyContent: 'space-between'
            }}>
                {students.map(student => (
                    <li className="list-group-item d-flex justify-content-between align-items-center mt-5" key={student.id} >
                        <div>
                            <div>Name: {student.name}</div>
                            <div>Surname: {student.surname}</div>
                            <div>Phone: {student.phone}</div>
                            <div>Address: {student.address}</div>
                            <div>Instagram: {student.link}</div>
                            <div>Group: {student.groups}</div>
                        </div>
                        <div>
                            <button className="btn btn-danger me-2" onClick={() => deleteStudent(student.id)}>
                                Delete
                            </button>
                            <button className="btn btn-warning" onClick={() => editStudent(student.id)}>
                                Edit
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            {isEditMode && (
                <div className="container ">
                    <h3>Edit Student</h3>
                    <form>
                        <div style={{
                            backgroundColor: "white"
                        }}>
                            <div className="mt-3"><label>Name:</label>
                                <input
                                    type="text"
                                    value={editedStudent.name}
                                    onChange={(e) => setEditedStudent({ ...editedStudent, name: e.target.value })}
                                />
                            </div>
                            <div className="mt-3"><label>Surname:</label>
                                <input
                                    type="text"
                                    value={editedStudent.surname}
                                    onChange={(e) => setEditedStudent({ ...editedStudent, surname: e.target.value })}
                                />
                            </div>
                            <div className="mt-3">
                                <label>Phone:</label>
                                <input
                                    type="text"
                                    value={editedStudent.phone}
                                    onChange={(e) => setEditedStudent({ ...editedStudent, phone: e.target.value })}
                                />
                            </div>
                            <div className="mt-3">
                                <label>Address:</label>
                                <input
                                    type="text"
                                    value={editedStudent.address}
                                    onChange={(e) => setEditedStudent({ ...editedStudent, address: e.target.value })}
                                />
                            </div>
                            <div className="mt-3">
                                <label>Link:</label>
                                <input
                                    type="text"
                                    value={editedStudent.link}
                                    onChange={(e) => setEditedStudent({ ...editedStudent, link: e.target.value })}
                                />
                            </div>
                            <div className="mt-3">
                                <label>Groups:</label>
                                <select value={editedStudent.groups}
                                        onChange={(e) => setEditedStudent({ ...editedStudent, groups: e.target.value })}>
                                    <option value="ВТиПО">ВТиПО</option>
                                    <option value="ИС">ИС</option>
                                    <option value="ИБ">ИБ</option>
                                </select>
                            </div>
                        </div>
                        <button type="button" className="btn btn-success" onClick={saveEditedStudent}>
                            Save
                        </button>
                    </form>
                </div>
            )}
            <button className="btn btn-dark me-3" onClick={back}>
                Back
            </button>
        </div>

    );

}
