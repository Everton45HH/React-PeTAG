import styles from '../../styles/Login.module.css';
import dog from '../../assets/images/cao2.webp';
import logo from '../../assets/images/Logo.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
<link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.7/css/all.css"></link>


export default function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("http://127.0.0.1:5000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha })
        });

        const data = await response.json();

        if (response.ok) {
        alert(data.message);
        navigate("/user/home");
        } else {
        alert(data.message);    
        }

    } catch (error) {
        console.error("Erro ao logar:", error);
        alert("Erro ao conectar com o servidor.");
    }
    };


    return (
        <>
        <div className={styles.container}>

            <img src={dog} alt="Dog" className={styles.animal_img} />

            <div className={styles.login}>
                
                <img src={logo} alt="Logo PeTAG" className={styles.logo} />


                <form className={styles.login_box} onSubmit={handleSubmit}>
                        <label htmlFor="email" className={styles.label}>Email:</label>
                        <input type="email" placeholder="Email" name="email" required onChange={(e) => setEmail(e.target.value)} />

                        <label htmlFor="senha" className={styles.label}>Senha:</label>
                        <input type="password" placeholder="Senha" name="senha" required onChange={(e) => setSenha(e.target.value)}/>

                    <p>OU</p>

                    <div className={styles.social_login}>
                        <i className="fa-brands fa-google"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-microsoft"></i>
                    </div>

                    <input type="submit" className="submit_input" value='ENVIAR'/>
                    

                    <p className={styles.cadastro}>Não tem uma conta? <a href="/user/register">Cadastre-se</a></p>
                        
                </form>

            </div>
        </div>
        </>
    );
}