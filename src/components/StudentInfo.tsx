import React, { useState, FormEvent } from 'react';

interface StudentData {
  name: string;
  age: string;
  grade: string;
}

const StudentInfo: React.FC = () => {
  const [studentData, setStudentData] = useState<StudentData>({
    name: '',
    age: '',
    grade: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Student Data:', studentData);
    // Reset form
    setStudentData({ name: '', age: '', grade: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="student-form">
      <h2>Student Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={studentData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={studentData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="grade">Grade:</label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={studentData.grade}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <style jsx>{`
        .student-form {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 20px;
          margin: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          max-width: 400px;
        }
        h2 {
          color: #2c3e50;
          margin-bottom: 20px;
          text-align: center;
        }
        .form-group {
          margin-bottom: 15px;
        }
        label {
          display: block;
          margin-bottom: 5px;
          color: #2c3e50;
        }
        input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }
        input:focus {
          outline: none;
          border-color: #3498db;
        }
        button {
          width: 100%;
          padding: 10px;
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.2s;
        }
        button:hover {
          background-color: #2980b9;
        }
      `}</style>
    </div>
  );
};

export default StudentInfo; 