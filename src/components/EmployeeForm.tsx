import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { employeeSlice } from '../redux/slice';

export const EmployeeForm = (onSubmit:any) => {
    const employees = useSelector((state: RootState) => state.employee.employees)  
  const [name, setName] = useState(employee.name || '');
  const [jobTitle, setJobTitle] = useState(employee.jobTitle || '');
  const [id, setId] = useState(employee.id || '');
  const [hireDate, sethireDate] = useState(employee.hireDate || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        jobTitle:
        <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Phone:
        <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <br />
      <label>
        hireDate:
        <input type="text" value={hireDate} onChange={(e) => sethireDate(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};