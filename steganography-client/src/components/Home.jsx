import Tool from './Tool';
import styles from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faNavicon } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose';
import { useEffect, useRef, useState } from 'react';

function Home() {

    const menuIconRef = useRef(null);
    const menuCloseIconRef = useRef(null);
    const mobileNavBarRef = useRef(null);
    const homePageRef = useRef(null);
    const toolPageRef = useRef(null);
    const mobileHomePageRef = useRef(null);
    const mobileToolPageRef = useRef(null);

    const [page, setPage] = useState('home');

    useEffect(() => {
        if (page === 'home') {
            homePageRef.current.style.fontWeight = 800;
            toolPageRef.current.style.fontWeight = 500;
            homePageRef.current.style.backgroundColor = '#3f48cc';
            homePageRef.current.style.color = 'rgb(0,0,0,0.8)';
            homePageRef.current.style.padding = '10px';
            toolPageRef.current.style.color = '#3f48cc';
            toolPageRef.current.style.backgroundColor = 'rgb(0,0,0,0.8)';
            toolPageRef.current.style.padding = '10px';
            mobileHomePageRef.current.style.fontWeight = 800;
            mobileHomePageRef.current.style.color = '#3f48cc';
            mobileHomePageRef.current.style.backgroundColor = 'rgb(0,0,0,0.8)';
            mobileHomePageRef.current.style.padding = '10px';
            mobileToolPageRef.current.style.fontWeight = 500;
            mobileToolPageRef.current.style.color = 'rgb(0,0,0,0.8)';
            mobileToolPageRef.current.style.backgroundColor = '#3f48cc';
            mobileToolPageRef.current.style.padding = '10px';
        } else if (page === 'tool') {
            homePageRef.current.style.fontWeight = 500;
            toolPageRef.current.style.fontWeight = 800;
            homePageRef.current.style.color = '#3f48cc';
            homePageRef.current.style.backgroundColor = 'rgb(0,0,0,0.8)';
            homePageRef.current.style.padding = '10px';
            toolPageRef.current.style.backgroundColor = '#3f48cc';
            toolPageRef.current.style.color = 'rgb(0,0,0,0.8)';
            toolPageRef.current.style.padding = '10px';
            mobileHomePageRef.current.style.fontWeight = 500;
            mobileHomePageRef.current.style.color = 'rgb(0,0,0,0.8)';
            mobileHomePageRef.current.style.backgroundColor = '#3f48cc';
            mobileHomePageRef.current.style.padding = '10px';
            mobileToolPageRef.current.style.fontWeight = 800;
            mobileToolPageRef.current.style.color = '#3f48cc';
            mobileToolPageRef.current.style.backgroundColor = 'rgb(0,0,0,0.8)';
            mobileToolPageRef.current.style.padding = '10px';
        }
    }, [page])


    return (
        <>
            <div className={styles.homeHeader}>
                <div className={styles.homeHeaderLogo}>
                    <img src='https://github.com/CodeTusharSingh/steganography-tool/raw/3740cc20216957b6cecf285dc5d884f46e8bd15b/steganograhy.png' title='Digital Steganography' alt='Digital Steganography'></img>
                </div>
                <div className={styles.homeHeaderMenu}>
                    <div id={styles.homeHeaderMenuIcon} ref={menuIconRef} onClick={() => {
                        menuIconRef.current.style.display = 'none';
                        menuCloseIconRef.current.style.display = 'inline';
                        mobileNavBarRef.current.style.display = 'flex';
                    }}><FontAwesomeIcon icon={faNavicon} size='2x' color='#3f48cc'></FontAwesomeIcon></div>
                    <div id={styles.homeHeaderMenuCloseIcon} ref={menuCloseIconRef} onClick={() => {
                        menuIconRef.current.style.display = 'inline';
                        menuCloseIconRef.current.style.display = 'none';
                        mobileNavBarRef.current.style.display = 'none';
                    }}><FontAwesomeIcon icon={faClose} size='2x' color='#3f48cc'></FontAwesomeIcon></div>
                </div>
                <div className={styles.homeHeaderNavBar}>
                    <p id={styles.homeHeaderNavBarHome} ref={homePageRef} onClick={() => { setPage('home') }}>Home</p>
                    <p id={styles.homeHeaderNavBarTool} ref={toolPageRef} onClick={() => { setPage('tool') }}>Tool</p>
                </div>
            </div>
            <div className={styles.homeHeaderContainerMobileNavBar}>
                <div className={styles.homeHeaderMobileNavBar} ref={mobileNavBarRef}>
                    <p id={styles.homeHeaderMobileNavBarHome} ref={mobileHomePageRef} onClick={() => { setPage('home') }}>Home</p>
                    <p id={styles.homeHeaderMobileNavBarTool} ref={mobileToolPageRef} onClick={() => { setPage('tool') }}>Tool</p>
                </div>
            </div>
            <br></br>
            {<div className={page === 'home' ? `${styles.visible}` : `${styles.hidden}`}>
                <div className={styles.homeIntro}>
                    <h1 style={{ color: '#66fcf1', fontFamily: 'sans-serif', textAlign: 'center' }}>Steganography</h1>
                    <hr></hr>
                    <section className={styles.homeSection}>
                        <h2 style={{ color: '#66fcf1', fontFamily: 'sans-serif' }}>Introduction to Steganography</h2>
                        <div className={styles.homeSectionDiv}>
                            <p style={{ color: '#c5c6c7', fontFamily: 'sans-serif', fontSize: '16px' }}>Steganography is an ancient art and science of hiding information.
                                The word steganography comes from the Greek words &quot;steganos&quot; (meaning &quot;covered or concealed&quot;) and &quot;graphia&quot; (meaning &quot;writing&quot;).
                                Unlike cryptography, which protects information by transforming it into an unreadable format,
                                steganography hides the existence of the message itself.
                                The goal is to communicate in a way that does not draw attention,
                                often by embedding the hidden message within another file or medium.</p>

                            <img src='https://news.cnrs.fr/sites/default/files/styles/visuel_principal/public/assets/images/figure_72dpi.png'
                                title='introduction to steganography' alt='introduction to steganography'></img>
                        </div>
                    </section>
                    <hr></hr>

                    <section className={styles.homeSection}>
                        <h2 style={{ color: '#66fcf1', fontFamily: 'sans-serif' }}>History of Steganography</h2>
                        <div className={styles.homeSectionDiv}>
                            <p style={{ color: '#c5c6c7', fontFamily: 'sans-serif', fontSize: '16px' }}>The practice of steganography dates back to ancient Greece, where hidden messages were written on wax-covered tablets or on the shaved heads of messengers. During World War II, steganographic techniques included the use of invisible ink and microdots to convey secret messages without detection.</p>
                            <img src='https://www.tattoolife.com/wp-content/uploads/2021/11/Detail-of-an-illustration-by-Giorgio-De-Gaspari-F.jpeg'
                                title='hisyory of steganography' alt='hisyory of steganography'></img>
                        </div>
                    </section>
                    <hr></hr>

                    <section className={styles.homeSection}>
                        <h2 style={{ color: '#66fcf1', fontFamily: 'sans-serif' }}>How Steganography Works</h2>
                        <div className={styles.homeSectionDiv}>
                            <p style={{ color: '#c5c6c7', fontFamily: 'sans-serif', fontSize: '16px' }}>Steganography works by concealing data within a non-secret medium. For instance, in image steganography, secret information is embedded in the least significant bits of pixel values. This subtle modification is generally imperceptible to the human eye but can be detected and extracted by someone who knows the embedding algorithm.
                            </p>
                            <p><b>Here&apos;s how it works in the digital world:</b></p>
                            <ol>
                                <li>Digital Image Basics:</li>
                                <br></br>
                                <ul>
                                    <li>Digital images are made up of pixels, with each pixel represented by color channels: Red, Green, and Blue (RGB).</li>
                                    <li>Each color channel in a pixel is usually represented by an 8-bit binary number, allowing values from 0 to 255.</li>
                                </ul>
                                <br></br>
                                <li>Embedding Data:</li>
                                <br></br>
                                <ul>
                                    <li>The LSB method for the red channel involves modifying the least significant bit of the red value in each pixel.</li>
                                    <li>The secret message is converted to binary and each bit is embedded in the LSB of the red value of consecutive pixels.</li>
                                    <li>The message is terminated with 00000000 to indicate the end.</li>
                                </ul>
                            </ol>

                            <p><b>Embedding Process</b></p>
                            <ol>
                                <li>Convert the Message to Binary:</li>
                                <br></br>
                                <ul>
                                    <li>Convert each character of the secret message to its ASCII value and then to an 8-bit binary representation.</li>
                                </ul>
                                <br></br>
                                <li>Modify the Pixels:</li>
                                <br></br>
                                <ul>
                                    <li>Iterate through each pixel in the image.</li>
                                    <li>Replace the LSB of the red channel of each pixel with the bits of the secret message.</li>
                                    <li>Append 00000000 at the end of the message to indicate its end.</li>
                                </ul>
                            </ol>
                            <p><b>Extraction Process</b></p>
                            <ol>
                                <li>Initialize an Empty Binary String:</li>
                                <br></br>
                                <ul>
                                    <li>Start with an empty string to store the extracted bits.</li>
                                </ul>
                                <br></br>
                                <li>Iterate Through Each Pixel:</li>
                                <br></br>
                                <ul>
                                    <li>Loop through each pixel in the image in the same order they were modified during the embedding process.
                                    </li>
                                </ul>
                                <br></br>
                                <li>Extract the LSB from the Red Channel:</li>
                                <br></br>
                                <ul>
                                    <li>For each pixel, get the red channel value and extract its least significant bit (LSB).</li>
                                    <li>Append the extracted bit to the binary string.</li>
                                </ul>
                                <br></br>
                                <li>Check for End of Message:</li>
                                <br></br>
                                <ul>
                                    <li>After extracting each bit, check if the last 8 bits of the binary string are 00000000, which indicates the end of the message.</li>
                                    <li>If 00000000 is found, remove this sequence from the binary string.</li>
                                </ul>
                                <br></br>
                                <li>Convert Binary to Characters:</li>
                                <br></br>
                                <ul>
                                    <li>Split the binary string (excluding the end-of-message marker) into 8-bit segments.</li>
                                    <li>Convert each 8-bit segment to its corresponding ASCII character.</li>
                                </ul>
                                <br></br>
                                <li>Combine Characters to Form the Message:</li>
                                <br></br>
                                <ul>
                                    <li>Combine the characters to form the original secret message.</li>
                                </ul>
                            </ol>

                        </div>
                    </section>
                    <hr></hr>

                    <section className={styles.homeSection}>
                        <h2 style={{ color: '#66fcf1', fontFamily: 'sans-serif' }}>Applications of Steganography</h2>
                        <div className={styles.homeSectionDiv}>
                            <p style={{ color: '#c5c6c7', fontFamily: 'sans-serif', fontSize: '16px' }}>Steganography has numerous applications, including enhancing data security by making it difficult for unauthorized parties to detect sensitive information. It is also used in digital watermarking to protect intellectual property and in covert communications to transmit messages without arousing suspicion.</p>
                        </div>
                    </section>
                    <hr></hr>

                    <section className={styles.homeSection}>
                        <h2 style={{ color: '#66fcf1', fontFamily: 'sans-serif' }}>Advantages and Disadvantages
                        </h2>
                        <div className={styles.homeSectionDiv}>
                            <p style={{ color: '#c5c6c7', fontFamily: 'sans-serif', fontSize: '16px' }}>Steganography provides an additional layer of security and can be combined with encryption. However, it has limitations, such as the amount of data that can be hidden and potential degradation of the carrier file. Additionally, if the method is known, it can be vulnerable to detection through steganalysis.</p>
                        </div>
                    </section>
                </div>
            </div>
            }
            {<div className={page === 'tool' ? `${styles.visible}` : `${styles.hidden}`}>
                <Tool></Tool>
            </div>
            }
            <br></br>
            <footer className={styles.homeFooter}>
                <br></br>
                <div id={styles.homeFooterContactInfo}>
                    <a href='https://github.com/CodeTusharSingh' target='_blank'><FontAwesomeIcon icon={faGithub} size='2x'></FontAwesomeIcon></a>
                    <a href='https://www.linkedin.com/in/tushar-singh-a9ab79234/' target='_blank'><FontAwesomeIcon icon={faLinkedinIn} size='2x'></FontAwesomeIcon></a>
                    <a href='mailto: tusharsinghrai9235@gmail.com' target='_blank'><FontAwesomeIcon icon={faEnvelope} size='2x'></FontAwesomeIcon></a>
                </div>

                <div>
                    <p style={{ color: '#c5c6c7', fontFamily: 'sans-serif' }}>Created by Tushar Singh &copy; 2024</p>
                </div>
            </footer>
        </>
    )
}

export default Home;