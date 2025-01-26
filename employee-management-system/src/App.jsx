import { useContext, useState, useEffect } from 'react';
import './App.css';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';
import { setLocalStorage, getLocalStorage } from './utils/LocalStorage';

function App() {
  useEffect(() => {
    setLocalStorage();  
  }, []);
  
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  console.log("Auth data:", authData);

  const handleLogin = (email, password) => {
    console.log("Attempting login with", email, password);
    console.log("Employees in authData:", authData.employees);  

    if (email === 'admin@example.com' && password === '123') {
      setUser("admin");
    } 
    else if (authData && authData.employees.find(e => email === e.email && password === e.password)) {
      setUser("employee");
    } 
    else {
      console.log("Invalid login credentials");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'employee' && <EmployeeDashboard />}
      {user === 'admin' && <AdminDashboard />}
    </>
  );
}

export default App;
