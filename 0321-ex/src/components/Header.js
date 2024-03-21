import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>
        <Link to="/">ReactRouter 실습</Link>
      </h1>
      <span></span>
      <span></span>
      <span></span>
    </header>
  );
}
