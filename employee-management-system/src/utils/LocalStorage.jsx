const employee = [
    [
      {
        "id": 1,
        "email": "123@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": false,
            "completed": true,
            "fail": false,
            "title": "Task Title 1",
            "description": "This is the description of task 1.",
            "date": "2025-01-20",
            "category": "Development"
          },
          {
            "active": false,
            "newTask": true,
            "completed": false,
            "fail": true,
            "title": "Task Title 2",
            "description": "This is the description of task 2.",
            "date": "2025-01-18",
            "category": "Research"
          },
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "fail": false,
            "title": "Task Title 3",
            "description": "This is the description of task 3.",
            "date": "2025-01-15",
            "category": "Testing"
          }
        ]
      },
      {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
          {
            "active": false,
            "newTask": true,
            "completed": false,
            "fail": true,
            "title": "Task Title 1",
            "description": "This is the description of task 1.",
            "date": "2025-01-21",
            "category": "Documentation"
          },
          {
            "active": true,
            "newTask": false,
            "completed": true,
            "fail": false,
            "title": "Task Title 2",
            "description": "This is the description of task 2.",
            "date": "2025-01-16",
            "category": "Deployment"
          }
        ]
      },
      {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "fail": false,
            "title": "Task Title 1",
            "description": "This is the description of task 1.",
            "date": "2025-01-19",
            "category": "Development"
          },
          {
            "active": true,
            "newTask": false,
            "completed": true,
            "fail": false,
            "title": "Task Title 2",
            "description": "This is the description of task 2.",
            "date": "2025-01-18",
            "category": "Research"
          },
          {
            "active": false,
            "newTask": true,
            "completed": false,
            "fail": true,
            "title": "Task Title 3",
            "description": "This is the description of task 3.",
            "date": "2025-01-15",
            "category": "Testing"
          },
          {
            "active": true,
            "newTask": false,
            "completed": true,
            "fail": false,
            "title": "Task Title 4",
            "description": "This is the description of task 4.",
            "date": "2025-01-14",
            "category": "Documentation"
          }
        ]
      },
      {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": false,
            "completed": true,
            "fail": false,
            "title": "Task Title 1",
            "description": "This is the description of task 1.",
            "date": "2025-01-20",
            "category": "Research"
          },
          {
            "active": false,
            "newTask": true,
            "completed": false,
            "fail": true,
            "title": "Task Title 2",
            "description": "This is the description of task 2.",
            "date": "2025-01-17",
            "category": "Deployment"
          }
        ]
      },
      {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "fail": false,
            "title": "Task Title 1",
            "description": "This is the description of task 1.",
            "date": "2025-01-19",
            "category": "Documentation"
          },
          {
            "active": false,
            "newTask": false,
            "completed": true,
            "fail": false,
            "title": "Task Title 2",
            "description": "This is the description of task 2.",
            "date": "2025-01-18",
            "category": "Development"
          },
          {
            "active": false,
            "newTask": true,
            "completed": false,
            "fail": true,
            "title": "Task Title 3",
            "description": "This is the description of task 3.",
            "date": "2025-01-17",
            "category": "Testing"
          }
        ]
      }
    ]
  ];
  
  const admin = [
    {
      "id": 12,
      "email": "admin@example.com",
      "password": "123"
    }
  ];

export const setLocalStorage = ()=>{
    localStorage.setItem('employee',JSON.stringify(employee));
    localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStorage = ()=>{
    const employeeData = JSON.parse(localStorage.getItem('employee'));
    const adminData = JSON.parse(localStorage.getItem('admin'));
    return {employeeData,adminData};
}