import React, { useState } from 'react';
import styles from './styles.module.css';
import "./MemeFactory.css";
import { useNavigate, useLocation } from 'react-router-dom';
import { useClipboard } from 'use-clipboard-copy';

export default function MemeFactory(){

  const [copied, setCopied] = useState(false);

  const clipboard = useClipboard();
  const navigate = useNavigate();
  const location = useLocation();
  const url = new URLSearchParams(location.search).get('url');

  const copyLink = () => {
    clipboard.copy(url);
    setCopied(true);
  };

  return(
    <div className={styles.container}>
      <button onClick={() => navigate.push('/')} className={styles.home}>
        Make More Memes
      </button>
      { url && <img alt='meme' src={url} /> }
      <button onClick={copyLink} className={styles.copy}>
        {copied ? 'Link copied!' : 'Copy link'}
      </button>
    </div>
  );
};