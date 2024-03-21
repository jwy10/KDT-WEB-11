import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <span>
        <h1>
          <Link to="/">ReactRouter 실습</Link>
        </h1>
      </span>
      <span>
        <Link to="/student">학생</Link>
      </span>
      <span></span>
      <span></span>
    </div>
  );
}
