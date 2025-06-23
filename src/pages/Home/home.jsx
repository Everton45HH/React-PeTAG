import styles from '../../styles/home.module.css';
import dogimage1 from '../../assets/images/cao1.webp';
import HeaderHome from '../../components/HeaderHome/HeaderHome.jsx';

export default function Home() {
    return (
        <>
            <HeaderHome />
            <main>
                <div className={styles.container_keyframe}>
                    <span className="div1"></span>
                    <span className="div2"></span>
                    <span className="div3"></span>
                </div>
                <div className="texto_rolante"></div>
                <div className={styles.code_box}>
                    <span className={styles.typedText}></span>
                    <span className={styles.cursor}></span>
                </div>
                <aside>
                    <div className={styles.side_content}>
                        <ul>
                            <li className={styles.item_side}>Item 1</li>
                            <li className={styles.item_side}>Item 2</li>
                            <li className={styles.item_side}>Item 3</li>
                            <li className={styles.item_side}>Item 4</li>
                        </ul>
                    </div>
                </aside>
                <div className={styles.image_container}>
                    <img src={dogimage1} alt="teste" className={styles.fade} />
                </div>
            </main>
            <section className={styles.additional_section}></section>
        </>
    );
}