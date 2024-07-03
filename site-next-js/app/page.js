import Link from 'next/link';

export default function Welcome () {
  return (
    <center>
      <div>
        <h1>Добро пожаловать на мой мини-сайт на Next.js!</h1>
        <h2>Рада вас видеть! 🤟🤩🤟</h2> 
        <h3>Здесь вы можете ознакомиться с двумя направлениями - TUDA и  SUDA.</h3>
        <div class="link-container">
          <p>
            <Link href="/tuda">TUDA IDI</Link>
          </p>

          <p>
            <Link href="/suda" >SUDA IDI</Link>          
          </p>
        </div>
        
      </div>
    </center>
  );
}
 