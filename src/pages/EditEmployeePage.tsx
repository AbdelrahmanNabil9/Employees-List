import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { EmployeeDetails } from '../components/EmployeeDetails';
import { EmployeeForm } from '../components/EmployeeForm';
import { getEmployeeById, updateEmployee, employeeSlice, selectEmployees } from '../redux/slice';

export const EditEmployeePage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employee = useSelector(selectEmployees);

  useEffect(() => {
    if (!employee) {
      dispatch(getEmployeeById(employee));
    }
  }, []);

  const handleSubmit = async (updatedEmployee: any) => {
    await dispatch(updateEmployee(employee));
    dispatch(employeeSlice.actions.updateEmployee({ id, ...updatedEmployee }));
    navigate('/path', { replace: true });
  };

  return (
    <div>
      {employee ? (
        <>
          <h1>Edit Employee</h1>
          <EmployeeForm employee={employee} onSubmit={handleSubmit} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};