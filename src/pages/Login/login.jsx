import styles from '../../styles/Login.module.css';
import dog from '../../assets/images/cao2.webp';
import logo from '../../assets/images/Logo.png';
<link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.7/css/all.css"></link>


export default function Login() {
    return (
        <>
        <div className={styles.container}>

            <img src={dog} alt="Dog" className={styles.animal_img} />

            <div className={styles.login}>
                
                <img src={logo} alt="Logo PeTAG" className={styles.logo} />


                <form className={styles.login_box}>
                        <label className={styles.label}>Email:</label>
                        <input type="email" placeholder="Email" name="email" required />

                        <label className={styles.label}>Senha:</label>
                        <input type="password" placeholder="Senha" name="senha" required />

                    <p>OU</p>

                    <div className={styles.social_login}>
                        <i className="fa-brands fa-google"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-microsoft"></i>
                    </div>

                    <input type="submit" className="submit_input" placeholder='ENVIAR'/>
                    

                    <p className={styles.cadastro}>Não tem uma conta? <a href="/register">Cadastre-se</a></p>
                        
                </form>

            </div>
        </div>
        </>
    );
}