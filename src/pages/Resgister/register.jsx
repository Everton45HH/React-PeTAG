import styles from '../../styles/Register.module.css';
import dog from '../../assets/images/cao2.webp';
import logo from '../../assets/images/Logo.png';
import { useEffect, useState } from "react";

export default function Register() {

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await fetch("http://127.0.0.1:5000/user/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, telefone, email, senha })
        });

        const data = await response.json();
        console.log(data);
        alert(data.message)
        } catch (error) {
        console.error("Erro ao registrar:", error);
        alert("Erro ao conectar com o servidor.");
        }
    };



    return (

        <div className={styles.container}>

            <img src={dog} alt="Dog" className={styles.animal_img} />

            <div className={styles.login}>

                <img src={logo} alt="Logo PeTAG" className={styles.logo} />

                <form className={styles.login_box} onSubmit={handleSubmit}>

                    <label htmlFor="nome">Nome:</label>
                    <input type="text" placeholder="Digite seu Nome" name="nome" onChange={(e) => setNome(e.target.value)} />
                    
                    <label htmlFor="telefone">Telefone:</label>
                    <input type="tel" placeholder="Digite seu Telefone" name="telefone" onChange={(e) => setTelefone(e.target.value)} />

                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="Digite seu Email" name="email" onChange={(e) => setEmail(e.target.value)} />


                    <label htmlFor="senha">Senha:</label>
                    <input type="password" placeholder="Digite sua Senha" name="senha" onChange={(e) => setSenha(e.target.value)} />

                    <p>OU</p>

                    <div className={styles.social_login}>
                        <i className="fa-brands fa-google"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-microsoft"></i>
                    </div>
                    <input type="submit" id="submit-button" value="CRIAR CONTA"/>

                    <p className={styles.cadastro}>
                        Já tem uma conta? <a href="/user/login">Conecte-se</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

