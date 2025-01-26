const employee = [
  {
    "id": 1,
    "email": "123@example.com",
    "password": "123",
   
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    
  }
 
];

const admin = [
  {
    "id": 12,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employee', JSON.stringify(employee));
  localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employee'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
}
