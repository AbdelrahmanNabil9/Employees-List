import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface Employee {
  id: number;
  name: string;
  jobTitle: string;
  hireDate: string;
}

interface EmployeeState {
  employees: Employee[];
}

const initialState: EmployeeState = {
  employees: [],
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
        const employee= action.payload;
        state.employees.push(employee);
    },
    updateEmployee: (state, action: PayloadAction<Employee>) => {
      const { id, name, jobTitle, hireDate } = action.payload;
      const employee = state.employees.find((e) => e.id === id);
      if (employee) {
        employee.name = name;
        employee.jobTitle = jobTitle;
        employee.hireDate = hireDate;
      }
    },
    deleteEmployee: (state, action: PayloadAction<number>) => {
        delete state.employees[action.payload];
    },
    setEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload;
    },
    getEmployeeById: (state, action: PayloadAction<Employee>) => {
      const employee = action.payload;
      const index = state.employees.findIndex((e) => e.id === employee.id);
      if (index === -1) {
        state.employees.push(employee);
      } else {
        state.employees[index] = employee;
      }
    },
  },
});

export const { addEmployee, updateEmployee, deleteEmployee, setEmployees, getEmployeeById } =
  employeeSlice.actions;
export const selectEmployees = (state: RootState) => state.employee.employees as Employee[];