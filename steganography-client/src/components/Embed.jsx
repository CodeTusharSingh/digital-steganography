import styles from './Embed.module.css';
import { useState } from 'react';


function Embed() {
    const [image, setImage] = useState(null);
    const [displayImage, setDisplayImage] = useState(null);
    const [message, setMessage] = useState('');
    const [fileName, setFileName] = useState('Drag & Drop file here or click to choose');
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [fail, setFail] = useState(false);


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => {
                    setDimensions({ width: img.width, height: img.height });
                };
                img.src = event.target.result;
                setDisplayImage(event.target.result);
            };
            reader.readAsDataURL(file);
        }
        setImage(e.target.files[0]);
        console.log(image)
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        } else {
            setDimensions({ width: 0, height: 0 });
            setMessage('')
            setFileName('Drag & Drop file here or click to choose');
        }
    };

    const handleMessageChange = (e) => {
        if (((dimensions.width * dimensions.height) / 8) >= e.target.value.length) {
            setMessage(e.target.value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append('image', image);
        formData.append('message', message);

        try {
            const response = await fetch('http://localhost:3001/embed', {
                method: 'POST',
                body: formData,
            });
            const blob = await response.blob();
            // console.log(blob);
            const url = window.URL.createObjectURL(blob);
            // console.log(url);
            const link = document.createElement('a');
            // console.log(link);
            link.href = url;
            // console.log(link.href);
            link.setAttribute('download', 'output.png');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setMessage('');
            setImage(null)
            setDisplayImage(null)
            setDimensions({ width: 0, height: 0 });
            setFileName('Drag & Drop file here or click to choose');
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
            console.error('There was an error embedding the message!', error);
        }
    };


    return (
        <div className={styles.embedBody}>
            <div className={styles.embedForm}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.embedFormInput}>
                        <input type="file" accept="image/*" onChange={handleImageChange} required />
                        <p>{fileName}</p>
                    </div>
                    <br></br>
                    {image &&
                        <>
                            <img src={displayImage} alt={fileName} title={fileName} id={styles.embedImage}></img>
                            <p style={{ color: '#c5c6c7', fontFamily: 'sans-serif' }}>{fileName}</p>
                            <br></br>
                        </>
                    }
                    <textarea value={message} onChange={handleMessageChange} name='emdedMessageTextArea' placeholder="Enter message to hide" required />
                    <label htmlFor='emdedMessageTextArea' id={styles.embedMessageTextAreaLabel}>{message.length} / {(dimensions.width * dimensions.height) / 8} Characters</label>
                    <br></br>
                    <button type="submit">Embed Message</button>
                </form>
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
                <div className={styles.embedSuccess}>
                    <div>
                        <p>EMBEDDING SUCCESSFUL ✅</p>
                        <button onClick={() => { setSuccess(false) }}>OK</button>
                    </div>
                </div>
            }
            {fail &&
                <div className={styles.embedFail}>
                    <div>
                        <p>EMBEDDING UNSUCCESSFUL ❌</p>
                        <button onClick={() => { setFail(false) }}>OK</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Embed;