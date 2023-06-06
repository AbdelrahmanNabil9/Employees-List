import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store';
import { EmployeeList } from '../components/EmployeeList';
import { selectEmployees } from '../redux/slice';
import { employeeSlice } from '../redux/slice';

export const HomePage = () => {
  const dispatch = useDispatch();
  const employees = useSelector(selectEmployees);

  

  return (
    <div>
      <h1>Employee List</h1>
      <EmployeeList employees={employees} />
      <Link to="/add">Add Employee</Link>
    </div>
  );
};