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
        "title": "Develop Homepage UI",
        "description": "Design and implement the homepage user interface for the company's website using ReactJS and TailwindCSS.",
        "date": "2025-01-20",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "fail": true,
        "title": "Research Market Trends",
        "description": "Analyze and summarize the latest market trends in the tech industry for the quarterly report.",
        "date": "2025-01-18",
        "category": "Research"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "fail": false,
        "title": "Testing Payment Integration",
        "description": "Perform testing on the new payment gateway integration to ensure reliability and security.",
        "date": "2025-01-15",
        "category": "Testing"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 2,
      "failed": 1,
      "completed": 1
    },
    "totalTasks": 3 // Total number of tasks
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
        "title": "Prepare Documentation",
        "description": "Compile detailed project documentation for the recently completed backend system upgrade.",
        "date": "2025-01-21",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "fail": false,
        "title": "Deploy Cloud Infrastructure",
        "description": "Deploy the updated application to the AWS cloud infrastructure and ensure proper configuration.",
        "date": "2025-01-16",
        "category": "Deployment"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "failed": 1,
      "completed": 1
    },
    "totalTasks": 2 // Total number of tasks
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
        "title": "Feature Development: User Profile",
        "description": "Develop the user profile feature, including editing and displaying user details.",
        "date": "2025-01-19",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "fail": false,
        "title": "Research Competitive Products",
        "description": "Conduct research on competitors' products and create a comparative analysis report.",
        "date": "2025-01-18",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "fail": true,
        "title": "Bug Fixing: Login Issues",
        "description": "Investigate and resolve reported login issues on the production environment.",
        "date": "2025-01-15",
        "category": "Testing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "fail": false,
        "title": "Update Technical Documentation",
        "description": "Update the API documentation to reflect recent changes in the endpoints and data structure.",
        "date": "2025-01-14",
        "category": "Documentation"
      }
    ],
    "taskCount": {
      "active": 3,
      "newTask": 2,
      "failed": 1,
      "completed": 2
    },
    "totalTasks": 4 // Total number of tasks
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
        "title": "Research Security Best Practices",
        "description": "Investigate security best practices for web applications and summarize recommendations.",
        "date": "2025-01-20",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "fail": true,
        "title": "Deploy Backend Services",
        "description": "Deploy and test the updated backend services for the analytics system.",
        "date": "2025-01-17",
        "category": "Deployment"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "failed": 1,
      "completed": 1
    },
    "totalTasks": 2 // Total number of tasks
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
        "title": "Create User Guide",
        "description": "Draft a comprehensive user guide for the newly launched application features.",
        "date": "2025-01-19",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "fail": false,
        "title": "Develop Analytics Dashboard",
        "description": "Implement an analytics dashboard to track user behavior and system performance.",
        "date": "2025-01-18",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "fail": true,
        "title": "Testing Notification System",
        "description": "Perform testing on the notification system and fix any identified issues.",
        "date": "2025-01-17",
        "category": "Testing"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 2,
      "failed": 1,
      "completed": 1
    },
    "totalTasks": 3 // Total number of tasks
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
