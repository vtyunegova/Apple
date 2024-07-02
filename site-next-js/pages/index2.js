import React from 'react';
import Link from 'next/link';
 
const Home2 = () => {
  return (
    <div>
      <h1>Добро пожаловать на мой сайт на Next.js!</h1>
      <p>Привет! С помощью этой страницы я узнала как работает Link</p>
      
      <ul>
        <li>
          <Link href="/" legacyBehavior>
            <a>Перейти на страницу "😊🥰"</a>
          </Link>
        </li>
        <li>
          <Link href="/index3" legacyBehavior>
            <a>Перейти на страницу "И снова привет!"</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
 
export default Home2;