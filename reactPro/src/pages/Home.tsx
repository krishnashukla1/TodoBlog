// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface HomeProps {
  userName: string;
}

const Home: React.FC<HomeProps> = ({ userName }) => {
  return (
    <div>
      <h2>Welcome, {userName}, to the Task Manager!</h2>
      <Link to="/logout">Logout</Link>

    </div>
  );
};

export default Home;
