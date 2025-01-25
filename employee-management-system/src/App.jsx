import { useContext, useState, useEffect } from 'react';
import './App.css';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

function App() {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  console.log("Auth data:", authData);

  const handleLogin = (email, password) => {
    console.log("Attempting login with", email, password);
    if (email === '' && password === '') {
      setUser("admin");
    } else if (authData && authData.employees && authData.employees.find(e => e.email === email && e.password === password)) {
      setUser("employee");
    }
  };

  useEffect(() => {
    console.log("User state updated:", user);
  }, [user]);

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'employee' && <EmployeeDashboard />}
      {user === 'admin' && <AdminDashboard />}
    </>
  );
}

export default App;
