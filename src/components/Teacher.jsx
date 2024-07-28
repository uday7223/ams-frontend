// src/components/Teacher.js
import React, { useState } from "react";
import axios from "axios";
import '../css/teacher.css'

const Teacher = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [attachment, setAttachment] = useState("");
  const [className, setClassName] = useState("11th");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const assignment = { title, description, dueDate, attachment, className };
    await axios.post("http://localhost:8080/assignments", assignment);
  };

  return (
    <>
      <div className="teacher">
        <div className="teacher-con">
      
            <form onSubmit={handleSubmit}>
              <ul>

                <li>
                  <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </li>

                <li>
                  <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </li>

                <li>
                  <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                </li>

                <li>
                  <input type="file" onChange={(e) => setAttachment(e.target.files[0])}/>
                </li>

                <li>
                    <div className="teacher-drop">
                        <select value={className} onChange={(e) => setClassName(e.target.value)}>
                        <option value="11th">11th</option>
                        <option value="12th">12th</option>
                        </select>
                    </div>
                </li>

                <li>
                  <button type="submit">Submit</button>
                </li>

              </ul>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default Teacher;
