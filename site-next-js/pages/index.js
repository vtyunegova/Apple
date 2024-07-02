import React from 'react';
import Link from 'next/link';
 
const Welcome = () => {
  return (
    <div>
      <h1>Добро пожаловать на мой мини-сайт на Next.js!</h1>
      <p>
        <Link href="/index2" legacyBehavior>
          <a>Хотите узнать больше</a>
        </Link>
      </p>
      <p>
        <Link href="/index3" legacyBehavior>
          <a>Перейти на страницу "И снова привет!"</a>
        </Link>          
      </p>
    </div>
  );
};
 
export default Welcome;