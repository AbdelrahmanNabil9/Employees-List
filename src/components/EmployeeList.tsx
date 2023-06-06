import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Employee } from '../redux/slice';


export const EmployeeList = (  ) => {
    const employees = useSelector((state: RootState) => state.employee.employees)  
  return (
    <ul>
      {employees.map((employees:Employee) => (
        <li key={employees.id}>
          <Link to={`/view/${employees.id}`}>
            {employees.name} 
          </Link>
        </li>
      ))}
    </ul>
  );
};