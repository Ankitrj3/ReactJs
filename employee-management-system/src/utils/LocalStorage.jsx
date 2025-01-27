const employee = [
  {
    "id": 1,
    "name": "Ankit",
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
    ],
    "taskCount": {
      "active": 2,
      "newTask": 2,
      "failed": 1,
      "completed": 1
    }
  },
  {
    "id": 2,
    "name": "Robin",
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
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "failed": 1,
      "completed": 1
    }
  },
  {
    "id": 3,
    "name": "Likhitha",
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
    ],
    "taskCount": {
      "active": 3,
      "newTask": 2,
      "failed": 1,
      "completed": 2
    }
  },
  {
    "id": 4,
    "name": "Dinesh",
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
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "failed": 1,
      "completed": 1
    }
  },
  {
    "id": 5,
    "name": "Nitesh",
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
    ],
    "taskCount": {
      "active": 1,
      "newTask": 2,
      "failed": 1,
      "completed": 1
    }
  }
];

const admin = [
  {
    "id": 12,
    "name": "Aman",
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employee', JSON.stringify(employee));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employee'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
};
