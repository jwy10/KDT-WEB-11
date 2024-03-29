import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('mode'));
  // / => null
  // /?mode=dark => dark
  return (
    <div className={['Main', searchParams.get('mode')].join(' ')}>
      <div>
        <h1>Home</h1>
        <button
          onClick={() => {
            setSearchParams({ mode: 'dark' });
          }}
        >
          Dark Mode
        </button>
      </div>
    </div>
  );
}
