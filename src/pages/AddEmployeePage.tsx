import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EmployeeForm } from '../components/EmployeeForm';
import { employeeSlice,addEmployee,selectEmployees } from '../redux/slice';

export const AddEmployeePage = () => {
    const employee = useSelector(selectEmployees);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const newEmployee = await dispatch(addEmployee(employee));
    dispatch(employeeSlice.actions.addEmployee(newEmployee));
    navigate('/path', { replace: true });
  };

  return (
    <div>
      <h1>Add Employee</h1>
      <EmployeeForm onSubmit={handleSubmit} />
    </div>
  );
};