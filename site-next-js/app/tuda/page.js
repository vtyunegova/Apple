import Link from 'next/link';
 
export default function WelcomeTuda () {
  return (
    <center>
        <div>
            <h1>Добро пожаловать "TUDA"!</h1>
            <h3>Осюда вы можете попасть на главную страницу или же пройти дальше и попасть в SUDA 😉</h3>

            <div class="link-container">
                <p>
                    <Link href="/">GLAVNAYA</Link>
                </p>

                <p>
                    <Link href="/suda" >SUDA IDI</Link>          
                </p>
            </div>
        </div>
    </center>
  );
}