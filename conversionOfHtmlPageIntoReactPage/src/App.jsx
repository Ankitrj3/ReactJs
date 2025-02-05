import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <header>
        <img src="profile.jpg" alt="John Doe" className="profile-pic" />
        <h1>John Doe</h1>
        <p>React Web Developer</p>
      </header>
      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate React developer with experience in building dynamic and
          responsive web applications.
        </p>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>React.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML &amp; CSS</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
        </ul>
      </section>
      <footer>
        <p>Contact: johndoe@example.com</p>
      </footer>
    </div>
  );
}

export default App;
