import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../store';
import { Employee } from "../redux/slice";

export const EmployeeDetails = (employee:Employee[]) => {
    
    return (
      <div>
        <p>
          <strong>Name: </strong>
          {employee.name} 
        </p>
        <p>
          <strong>jobTitle: </strong>
          {employee.jobTitle}
        </p>
        <p>
          <strong>id: </strong>
          {employee.id}
        </p>
        <p>
          <strong>hireDate: </strong>
          {employee.hireDate}
        </p>
      </div>
    );
  };