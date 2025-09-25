import styles from '../../styles/coleira.module.css'

export default function Coleira({ nome, latitude, longitude }) {
  return (
    <div className={styles.coleira}>
      <h2>Nome : {nome}</h2>
      <p>Lat: {latitude}</p>
      <p>Lng: {longitude}</p>
    </div>
  );
}
