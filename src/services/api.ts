import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getEmployees = async () =>
  axios.get(`${API_URL}/employees`).then((response) => response.data);

export const getEmployeeById = async (id: number) =>
  axios.get(`${API_URL}/employees/${id}`).then((response) => response.data);

export const addEmployee = async (employee: any) =>
  axios.post(`${API_URL}/employees`, employee).then((response) => response.data);

export const updateEmployee = async (id: number, employee: any) =>
  axios.put(`${API_URL}/employees/${id}`, employee).then((response) => response.data);

export const deleteEmployee = async (id: number) =>
  axios.delete(`${API_URL}/employees/${id}`);