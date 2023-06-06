import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { EmployeeDetails } from '../components/EmployeeDetails';
import { getEmployeeById, deleteEmployee, employeeSlice } from '../redux/slice';
import { RootState } from '../store';

export const ViewEmployeePage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employee = useSelector((state: RootState) => state.employee.employees.find((e) => e.id === id));

  useEffect(() => {
    if (!employee) {
      dispatch(getEmployeeById(id));
    }
  }, [dispatch, employee, id]);

  const handleDelete = async () => {
    await dispatch(deleteEmployee(id));
    dispatch(employeeSlice.actions.deleteEmployee(id));
    navigate('/path', { replace: true });
  };

  return (
    <div>
      {employee ? (
        <>
          <h1>View Employee</h1>
          <EmployeeDetails employee={employee} />
          <Link to={`/edit/${employee.id}`}>Edit Employee</Link>
          <button onClick={handleDelete}>Delete Employee</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};