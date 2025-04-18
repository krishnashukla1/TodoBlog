// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
// import Register from './components/Register';
// import Login from './components/Login';
// import TaskForm from './components/TaskForm';
// import TaskList from './components/TaskList';
// import Home from './pages/Home';

// const App: React.FC = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!localStorage.getItem('token'));
//   const [userName, setUserName] = useState<string>('');

//   useEffect(() => {
//     if (isLoggedIn) {
//       const token = localStorage.getItem('token');
//       const userData = token ? JSON.parse(atob(token.split('.')[1])) : null;
//       setUserName(userData?.email || 'User');
//     }
//   }, [isLoggedIn]);

//   return (
//     <div className="App">
//       <h1>Task Manager</h1>
      
//       <Router>
//         <Navigation isLoggedIn={isLoggedIn} userName={userName} setIsLoggedIn={setIsLoggedIn} />
        
//         <Routes>
//           <Route path="/" element={isLoggedIn ? <Home userName={userName} /> : <div>Please Log In</div>} />
//           <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>

//         {isLoggedIn && (
//           <div>
//             <TaskForm onTaskCreated={() => {}} />
//             <TaskList />
//           </div>
//         )}
//       </Router>
//     </div>
//   );
// };

// const Navigation: React.FC<{ isLoggedIn: boolean; userName: string; setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>> }> = ({ isLoggedIn, userName, setIsLoggedIn }) => {
//   const navigate = useNavigate(); // useNavigate should be inside Router
  
//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//     navigate('/login');
//   };

//   return (
//     <nav>
//       <Link to="/">Home</Link> |{' '}
//       {!isLoggedIn ? (
//         <>
//           <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
//         </>
//       ) : (
//         <>
//           <span>Welcome, {userName}</span> | <button onClick={handleLogout}>Logout</button>
//         </>
//       )}
//     </nav>
//   );
// };

// export default App;



/*====================================

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Home from './pages/Home';
import 'animate.css';
import './App.css'

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!localStorage.getItem('token'));
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    if (isLoggedIn) {
      const token = localStorage.getItem('token');
      const userData = token ? JSON.parse(atob(token.split('.')[1])) : null;
      setUserName(userData?.email || 'User');
    }
  }, [isLoggedIn]);

  return (
    <div className="App font-sans bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-white min-h-screen p-6">
      <Router>
        <h1 className="text-5xl font-extrabold text-center mb-8 animate__animated animate__fadeInDown drop-shadow-lg">
          🚀 Task Manager
        </h1>
        <Navigation isLoggedIn={isLoggedIn} userName={userName} setIsLoggedIn={setIsLoggedIn} />

        <Routes>
          <Route path="/" element={isLoggedIn ? <Home userName={userName} /> : <div className="text-center mt-6 text-xl">Please Log In</div>} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        {isLoggedIn && (
          <div className="mt-10 space-y-8 animate__animated animate__fadeInUp">
            <TaskForm onTaskCreated={() => {}} />
            <TaskList />
          </div>
        )}
      </Router>
    </div>
  );
};

const Navigation: React.FC<{ isLoggedIn: boolean; userName: string; setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>> }> = ({ isLoggedIn, userName, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="flex justify-center gap-6 mb-6 text-lg animate__animated animate__fadeIn">
      <Link to="/" className="hover:text-yellow-300 transition duration-300">🏠 Home</Link>
      {!isLoggedIn ? (
        <>
          <Link to="/login" className="hover:text-yellow-300 transition duration-300">🔐 Login</Link>
          <Link to="/register" className="hover:text-yellow-300 transition duration-300">📝 Register</Link>
        </>
      ) : (
        <>
          <span className="font-semibold">👋 Welcome, {userName}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition duration-300 shadow-md"
          >
            Logout
          </button>
        </>
      )}
    </nav>
  );
};

export default App;
*/



import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Home from './pages/Home';
import './App.css';
import 'animate.css';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!localStorage.getItem('token'));
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    if (isLoggedIn) {
      const token = localStorage.getItem('token');
      const userData = token ? JSON.parse(atob(token.split('.')[1])) : null;
      setUserName(userData?.email || 'User');
    }
  }, [isLoggedIn]);

  return (
    <div className="app-container">
      <Router>
        <h1 className="app-title animate__animated animate__fadeInDown">🚀 Task Manager</h1>
        <Navigation isLoggedIn={isLoggedIn} userName={userName} setIsLoggedIn={setIsLoggedIn} />

        <Routes>
          <Route path="/" element={isLoggedIn ? <Home userName={userName} /> : <div className="login-message">Please Log In</div>} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        {isLoggedIn && (
          <div className="task-area animate__animated animate__fadeInUp">
            <TaskForm onTaskCreated={() => {}} />
            <TaskList />
          </div>
        )}
      </Router>
    </div>
  );
};

const Navigation: React.FC<{ isLoggedIn: boolean; userName: string; setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>> }> = ({ isLoggedIn, userName, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="nav-container animate__animated animate__fadeIn">
      <Link to="/" className="nav-link">🏠 Home</Link>
      {!isLoggedIn ? (
        <>
          <Link to="/login" className="nav-link">🔐 Login</Link>
          <Link to="/register" className="nav-link">📝 Register</Link>
        </>
      ) : (
        <>
          <span className="user-welcome">👋 Welcome, {userName}</span>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
  );
};

export default App;
