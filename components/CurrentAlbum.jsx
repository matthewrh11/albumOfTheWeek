import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { SiApplemusic, SiSpotify } from 'react-icons/si'

const inter = Inter({ subsets: ['latin'] })

export default function CurrentAlbum({albumName, artist, submittedBy, albumPicture, appleMusicURL, spotifyURL}) {

  return (
    <div className={styles.currentAlbumContainer}>
        <div className={styles.currentAlbumImage} style={{position: 'relative'}}>
            {typeof albumPicture !== 'undefined' && 
            <Image
            src={albumPicture}
            alt={`${albumName} by ${artist} album cover`}
            priority
            fill
            unoptimized //remove this
        />
        }
            
        </div>
        <p className={styles.currentAlbumName}>
            {albumName}
        </p>
        <p className={styles.currentArtist}>
            {artist}
        </p>
        <p className={styles.currentSubmittedBy}>
            Submitted by: {submittedBy}
        </p>
        <div className={styles.currentAlbumLinks}>
            <a className={styles.currentAlbumLink} href={spotifyURL} target="_blank" rel="noopener noreferrer">
                <SiSpotify
                    size="20px"
                /> 
            </a>
            <a className={styles.currentAlbumLink} href={appleMusicURL} target="_blank" rel="noopener noreferrer">
                <SiApplemusic
                    size="20px"
                /> 
            </a>
        </div>
    </div>
  )
}
