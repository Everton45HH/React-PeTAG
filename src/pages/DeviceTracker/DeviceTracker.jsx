import map from '../../assets/images/map.jpg'
import style from '../../styles/map.module.css';


export default function Login() {
    return (
        <>
        <div className={style.container}>

            <div className="deviceName">
                <h1>Dispositivo 1</h1>
            </div>

            <div>
                <img src={map} alt="MAPA" className='map'/>
            </div>

            <div className="deviceData">

                <h1>
                    Historico Coordenadas
                </h1>

            </div>
        </div>
        </>
    
)}