import React, { useState } from 'react';

const StudentInfo = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    age: '',
    course: '',
    birthYear: '',
    birthMonth: '',
    birthDate: ''
  });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(studentData);
    setStudentData({
      name: '',
      age: '',
      course: '',
      birthYear: '',
      birthMonth: '',
      birthDate: ''
    });
  };

  return (
    <div className="student-form">
      <h2>STUDENT INFORMATION</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">STUDENT NAME:</label>
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
          <label htmlFor="age">AGE:</label>
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
          <label htmlFor="course">COURSE:</label>
          <input
            type="text"
            id="course"
            name="course"
            value={studentData.course}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group birth-row">
          <label style={{width: '100%'}}>BIRTH YEAR</label>
          <label style={{width: '100%'}}>MONTH</label>
          <label style={{width: '100%'}}>DATE</label>
        </div>
        <div className="form-group birth-row">
          <input
            type="number"
            name="birthYear"
            placeholder="Year"
            value={studentData.birthYear}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="birthMonth"
            placeholder="Month"
            value={studentData.birthMonth}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="birthDate"
            placeholder="Date"
            value={studentData.birthDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
      {submitted && (
        <div className="submitted-info">
          <div><b>Submitted Information:</b></div>
          <div>Student Name: {submitted.name}</div>
          <div>Age: {submitted.age}</div>
          <div>Course: {submitted.course}</div>
          <div>Birth Date: {submitted.birthYear}-{submitted.birthMonth}-{submitted.birthDate}</div>
        </div>
      )}
    </div>
  );
};

export default StudentInfo; 