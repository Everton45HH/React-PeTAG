import styles from '../../styles/Login.module.css';
export default function Login() {
    return (
        <>
        <div className={styles.container}>
            <img src={dog} alt="Dog" className={styles.animal_img} />
            <div className={styles.overlay}></div>
            <div className={styles.login}>
            <img src={logo} alt="Logo PeTAG" className={styles.logo} />
                <form className={styles.login_box}>
                    <label htmlFor="email" className={styles.label}>Email:</label>
                    <input type="email" placeholder="Email" name="email" required />

                    <label htmlFor="senha" className={styles.label}>Senha:</label>
                    <input type="password" placeholder="Senha" name="senha" required />

                    <p>OU</p>

                    <div style={{ display: 'block' }}>
                        <i className="fa-brands fa-google"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-microsoft"></i>
                    </div>

                    <input type="submit" id="submit-button" value="ENTRAR" />
                </form>
                <p className="cadastro">
                    Não tem uma conta? <a href="/register">Cadastre-se</a>
                </p>
            </div>
        </div>
        </>
    );
}