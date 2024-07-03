import Link from 'next/link';

export default function WelcomeSuda () {
  return (
    <center>
       <div>
            <h1>Добро пожаловать "SUDA"!</h1>
            <h3>Осюда вы можете попасть на главную страницу или же пройти дальше и попасть в TUDA 😜</h3>   

            <div class="link-container">
                <p>
                    <Link href="/">GLAVNAYA</Link>
                </p>

                <p>
                    <Link href="/tuda" >TUDA IDI</Link>          
                </p>
            </div>
        </div> 
    </center>
    
  );
}