// src/components/Student.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/student.css"

const Student = () => {
    const [assignments, setAssignments] = useState([]);
    const [submission, setSubmission] = useState('');
    const [selectedAssignment, setSelectedAssignment] = useState(null);

    useEffect(() => {
        const fetchAssignments = async () => {
            const result = await axios.get('http://localhost:8080/assignments');
            setAssignments(result.data);
        };
        fetchAssignments();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const submissionData = { assignmentId: selectedAssignment.id, 
            studentName: 'Student Name', 
            submission: submission };
        await axios.post('http://localhost:8080/submissions', submissionData);
    };

    return (
       <>

<div className='student'>



    <div className="student-con-1">
        <h2>Assignments</h2>


    <ol>
        {assignments.map((assignment) => (
            <li key={assignment.id} onClick={() => setSelectedAssignment(assignment)}>
                {assignment.title}
            </li>
        ))}
    </ol>
        </div> 


    {selectedAssignment && (
        <div className="student-con-2">
            <form onSubmit={handleSubmit}>
            <h3>{selectedAssignment.title}</h3>
            <textarea placeholder="Submission" value={submission} onChange={(e) => setSubmission(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
        </div>
    )}

</div>
       </>
    );
};

export default Student;
