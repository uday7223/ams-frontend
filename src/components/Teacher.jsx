// src/components/Teacher.js
import React, { useState } from 'react';
import axios from 'axios';

const Teacher = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [attachment, setAttachment] = useState('');
    const [className, setClassName] = useState('11th');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const assignment = { title, description, dueDate, attachment, className };
        await axios.post('http://localhost:8080/assignments', assignment);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
            <input type="file" onChange={(e) => setAttachment(e.target.files[0])} />
            <select value={className} onChange={(e) => setClassName(e.target.value)}>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Teacher;
