import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider }  from 'react-redux';
import { store } from './store';
import { HomePage } from './pages/HomePage';
import { AddEmployeePage } from './pages/AddEmployeePage';
import { EditEmployeePage } from './pages/EditEmployeePage';
import { ViewEmployeePage } from './pages/ViewEmployeePage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route  path="/" element={<HomePage/>} />
          <Route  path="/add" element={<AddEmployeePage/>} />
          <Route  path="/edit/:id" element={<EditEmployeePage/>} />
          <Route  path="/view/:id" element={<ViewEmployeePage/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
