import styles from './Extract.module.css';
import { useState } from 'react';


function Extract() {
    const [image, setImage] = useState(null);
    const [displayImage, setDisplayImage] = useState(null);
    const [result, setResult] = useState('');
    const [fileName, setFileName] = useState('Drag & Drop file here or click to choose');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [fail, setFail] = useState(false);


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                // img.onload = () => {
                // setDimensions({ width: img.width, height: img.height });
                // };
                img.src = event.target.result;
                setDisplayImage(event.target.result);
            };
            reader.readAsDataURL(file);
        }
        setImage(e.target.files[0]);
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
            setResult('')
        } else {
            setResult('')
            setFileName('Drag & Drop file here or click to choose');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await fetch('http://localhost:3001/extract', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setResult(data.message);
            if (response.status === 200) {
                setLoading(false);
                setSuccess(true);
            } else {
                setLoading(false);
                setFail(true);
            }
        } catch (error) {
            setLoading(false);
            setFail(true);
            console.error('There was an error extracting the message!', error);
        }
    };
    return (
        <div className={styles.extractBody}>
            <div className={styles.extractForm}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.extractFormInput}>
                        <input type="file" accept="image/*" onChange={handleImageChange} required />
                        <p>{fileName}</p>
                    </div>
                    <br></br>
                    {image &&
                        <>
                            <img src={displayImage} alt={fileName} title={fileName} id={styles.extractImage}></img>
                            <p style={{ color: '#c5c6c7', fontFamily: 'sans-serif', width: 'fit-content' }}>{fileName}</p>
                            <br></br>
                        </>
                    }
                    <button type="submit">Extract Message</button>
                </form>
                <h2>Result</h2>
                <p id={styles.extractMessageTextAreaLabel}>{result.length} Characters</p>
                <div className={styles.extractResultArea}>
                    <p style={{ color: '#c5c6c7' }}>{result}</p>
                </div>
            </div>
            {loading &&
                <div className={styles.center}>
                    <div className={styles.wave}></div>
                    <div className={styles.wave}></div>
                    <div className={styles.wave}></div>
                    <div className={styles.wave}></div>
                    <div className={styles.wave}></div>
                    <div className={styles.wave}></div>
                    <div className={styles.wave}></div>
                    <div className={styles.wave}></div>
                    <div className={styles.wave}></div>
                    <div className={styles.wave}></div>
                </div>
            }
            {success &&
                <div className={styles.extractSuccess}>
                    <div>
                        <p>EXTRACTION SUCCESSFUL ✅</p>
                        <button onClick={() => { setSuccess(false) }}>OK</button>
                    </div>
                </div>
            }
            {fail &&
                <div className={styles.extractFail}>
                    <div>
                        <p>EXTRACTION UNSUCCESSFUL ❌</p>
                        <button onClick={() => { setFail(false) }}>OK</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Extract;