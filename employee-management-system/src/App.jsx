import { useContext, useState, useEffect } from 'react';
import './App.css';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';
import { setLocalStorage } from './utils/LocalStorage';

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser]=useState(null);
  const authData = useContext(AuthContext);
  console.log("Auth data:", authData);
  // localStorage.clear();
  useEffect(() => {
    setLocalStorage();  
  }, []);
  
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUser(userData.data);
    }
  },[])
  

  // useEffect(()=>{
  //   if(authData){
  //   const loggedInUser = localStorage.getItem("loggedInUser");
  //   if (loggedInUser) {
  //     setUser(loggedInUser);
  //   }
  // }
  // },[authData])

  const handleLogin = (email, password) => {

    if (email === 'admin@example.com' && password === '123') {
      setUser("admin");
      setLoggedInUser("admin");
      localStorage.setItem('loggedInUser',JSON.stringify('admin'));
    } 
    else if (authData){
      const employee = authData.employees.find(e => email === e.email && password === e.password);
      if(employee){
        setUser("employee");
        setLoggedInUser(employee);
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee})); 
      }
    }
    
    else {
      alert("Invalid login credentials");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'employee' ? <EmployeeDashboard data={loggedInUser}/>: null}
      {user === 'admin' ? <AdminDashboard />: null}
    </>
  );
}

export default App;
