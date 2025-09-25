import Coleira from '../../components/ColeiraCard/coleira' 
import { useEffect, useState } from "react";
import styles from '../../styles/dashboard.module.css'
    
export default function Dashboard() {
    const [coleiras, setColeiras] = useState([]);
  
    useEffect(() => {
    const fetchColeiras = () => {
        let userId = localStorage.getItem("userID");

        if (!userId) {
            console.error("Usuário não está logado ou userID não existe no localStorage.");
            console.error("Sessão definida para 1");
            userId = 1;
        } else {
            console.log(`ID da sessão ${userId}`);
        }

        fetch(`http://localhost:5000/api/coleira/${userId}`)
            .then(res => res.json())
            .then(data => {
                setColeiras(data);
                console.log(data);
            })
            .catch(err => console.error("Erro ao buscar coleiras:", err));
    };

    fetchColeiras();

    const interval = setInterval(fetchColeiras, 3000);

    return () => clearInterval(interval);
}, []);

    
    return ( 
        <>
            <div className={styles.global}>
            <header className={styles.header}>
                <div className={styles.menu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles.title}>
                    <h1>PeTAG</h1>
                </div>
                {/* <div className={styles.searchIcon}></div> */}
                <div className={styles.userIcon}>
                    
                </div>
            </header>
            
            <main>
                <div className={styles.board}>
                    <h3>Minhas Coleiras</h3>
                    {coleiras.map((c) => (
                        <Coleira
                            key={c.id}
                            nome={c.nomeColeira}
                            latitude={c.latitude}
                            longitude={c.longitude}
                        />
                    ))}
                </div>
            </main>
            </div>
        </>
    );
}
