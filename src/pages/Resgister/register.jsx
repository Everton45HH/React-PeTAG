import styles from '../../styles/Register.module.css';
import dog from '../../assets/images/cao2.webp';
import logo from '../../assets/images/Logo.png';; // Adicione o import do logo



export default function Register() {
    return (

        <div className={styles.container}>

            <img src={dog} alt="Dog" className={styles.animal_img} />

            <div className={styles.login}>

                <img src={logo} alt="Logo PeTAG" className={styles.logo} />

                <form className={styles.login_box}>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" placeholder="Digite seu Nome" name="nome" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="Digite seu Email" name="email" />

                    <label htmlFor="telefone">Telefone:</label>
                    <input type="tel" placeholder="Digite seu Telefone" name="telefone" />

                    <label htmlFor="senha">Senha:</label>
                    <input type="password" placeholder="Digite sua Senha" name="senha" />

                    <p>OU</p>

                    <div className={styles.social_login}>
                        <i className="fa-brands fa-google"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-microsoft"></i>
                    </div>
                    <input type="submit" id="submit-button" value="CRIAR CONTA" />

                    <p className={styles.cadastro}>
                        Já tem uma conta? <a href="/login">Conecte-se</a>
                    </p>
                </form>
            </div>
        </div>
    );
}
