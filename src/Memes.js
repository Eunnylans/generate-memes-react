import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function Memes() {
  const [memes, setMemes] = useState([]);
  const [memeIndex, setMemeIndex] = useState(0);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((res) => {
      res.json().then((res) => {
        const memes = res.data.memes;
        setMemes(memes);
      });
    });
  }, []);

  return memes.length ? (
    <div className={styles.container}>
      <div className={styles.button}>
        <button
          onClick={() => setMemeIndex(memeIndex - 1)}
          className={styles.previous}
        >
          Previous
        </button>

        <button
          onClick={() => setMemeIndex(memeIndex + 1)}
          className={styles.next}
        >
          Next
        </button>
      </div>
      <img src={memes[memeIndex].url} />
    </div>
  ) : (
    <></>
  );
}
