import { useEffect, useState } from "react";
import ActionButtons from '../../components/ActionButtons/ActionButtons';
import DashboardCard from '../../components/DashboardCard/DashboardCard';
import HeaderDashBoard from '../../components/HeaderDashBoard/HeaderDashBoard.jsx';
import styles from '../../styles/dashboard.module.css';
import '../../styles/dashboard.module.css';
    
export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('Menu clicado');
  };

  const handleSearchClick = () => {
    console.log('Busca clicada');
  };

  const handleProfileClick = () => {
    console.log('Perfil clicado');
  };
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
     const [devices] = useState([
    {
      id: 1,
      name: 'Dispositivo 1',
      distance: '21',
      maxDistance: '30',
      type: 'central'
    },
    {
      id: 2,
      name: 'Dispositivo 2',
      distance: '49',
      maxDistance: '300',
      type: 'collar'
    }
  ]);

  const handleSettingsClick = (device) => {
    console.log('Configurações para:', device.name);
  };

  const handleAddCentralDevice = () => {
    console.log('Adicionar dispositivo central');
  };

  const handleAddCollar = () => {
    console.log('Adicionar nova coleira');
  };

    
    return (
      <>
        <HeaderDashBoard />
    <main className={styles.dashboard} style={{ background: '#fff' }}>
          <div className={styles['dashboard-header']}>
            <h2 className={styles['dashboard-title']}>
              Meus Dispositivos
            </h2>
            <p className={styles['dashboard-subtitle']}>
              Monitore a localização dos seus pets em tempo real
            </p>
          </div>

          <div className={styles['devices-grid']}>
            {devices.map((device) => (
              <DashboardCard
                key={device.id}
                device={device}
                onSettingsClick={handleSettingsClick}
              />
            ))}
          </div>

          {coleiras.length === 0 && (
            <div className={styles['empty-state']}>
              <div className={styles['empty-state-icon']}>📱</div>
              <h3 className={styles['empty-state-title']}>
                Nenhum dispositivo encontrado
              </h3>
              <p className={styles['empty-state-description']}>
                Adicione seu primeiro dispositivo para começar o rastreamento
              </p>
            </div>
          )}

          <div className={styles['action-buttons']}>
            <ActionButtons
              onAddCentralDevice={() => console.log('Adicionar dispositivo central')}
              onAddCollar={() => console.log('Adicionar nova coleira')}
            />
          </div>
        </main>
      </>
    );
}
