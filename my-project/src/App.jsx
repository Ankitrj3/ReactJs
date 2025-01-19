import { useState } from 'react';
import { Users } from './users';
import './App.css';

function App() {
  const [query, setQuery] = useState('');

  const filteredUsers = Users.filter((user) =>
    user.first_name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="App flex items-center justify-center min-h-screen mt-20">
      <div className="w-full max-w-md">
        <input 
          type="text"
          placeholder="Search..."
          className="search rounded-full p-4 mb-6 w-full"
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul className="list bg-white rounded-lg shadow-md p-4">
          {filteredUsers.map((user) => (
            <li key={user.id} className="list-item border-b last:border-b-0 p-4">
              <div>
                <h4 className="text-lg font-semibold">{user.first_name}</h4> 
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
