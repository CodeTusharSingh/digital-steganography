import { useRef, useState } from 'react';
import Embed from './Embed';
import Extract from './Extract';
import styles from './Tool.module.css';

function Home() {
    const [embed, setEmbed] = useState(true);
    const embedButtonRef = useRef(null);
    const extractButtonRef = useRef(null);

    return (
        <>
            <div className={styles.ToolSelectionButton}>
                <button ref={embedButtonRef}
                    onClick={() => {
                        setEmbed(true);
                        embedButtonRef.current.style.backgroundColor = '#3f48cc';
                        embedButtonRef.current.style.color = 'white';
                        embedButtonRef.current.style.textDecoration = 'underline';
                        extractButtonRef.current.style.backgroundColor = 'rgb(0,0,0,0.8)';
                        extractButtonRef.current.style.color = '#3f48cc';
                        extractButtonRef.current.style.textDecoration = 'none';
                    }}
                    id={styles.embedButton}>Embed Message</button>
                <button ref={extractButtonRef}
                    onClick={() => {
                        setEmbed(false);
                        extractButtonRef.current.style.backgroundColor = '#3f48cc';
                        extractButtonRef.current.style.color = 'white';
                        extractButtonRef.current.style.textDecoration = 'underline';
                        embedButtonRef.current.style.backgroundColor = 'rgb(0,0,0,0.8)';
                        embedButtonRef.current.style.color = '#3f48cc';
                        embedButtonRef.current.style.textDecoration = 'none';
                    }}
                    id={styles.extractButton}>Extract Message</button>
            </div>
            <br></br>
            <div className={embed ? `${styles.visible}` : `${styles.hidden}`}>
                <Embed />
            </div>
            <div className={!embed ? `${styles.visible}` : `${styles.hidden}`}>
                <Extract />
            </div>
        </>
    )
}

export default Home;