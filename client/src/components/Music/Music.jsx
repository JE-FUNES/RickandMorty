import React from 'react';
import styles from "./Music.module.css";
import audioFile from "./RickMorty.mp3";

const Music = () => {



return (
    <audio className={styles.audio} src={audioFile}  controls autoPlay preload loop/>
)

}

export default Music;