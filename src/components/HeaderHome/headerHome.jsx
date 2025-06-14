import styles from '../../styles/home.module.css';
function HeaderHome() {
  return (
    <header>
        <nav className={styles.nav_bar}>
            <div className={styles.logo}>
                <h1><span className={styles.blue}>Pe</span><span className={styles.black}>TAG</span></h1>
                <p>Pet Tracking & GPS</p>
            </div>

            <div className={styles.nav_list}>
                <ul id="ul1">
                    <li><a href="#" className={styles.nav_link}>O que é o projeto PeTAG?</a></li>
                    <li><a href="#" className={styles.nav_link}>Quem somos nós?</a></li>
                    <li><a href="#" className={styles.nav_link}>Contato</a></li>
                </ul>
                <ul id="ul2">
                    <li><a href="#" className={styles.nav_link}>ENTRAR</a></li>
                    <li><a href="#" className={styles.nav_link}>CADASTRE-SE</a></li>
                </ul>
            </div>

            <div className={styles.menu} onClick={showSideContent}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>
  );
}
<script>
    
</script>
export default HeaderHome;