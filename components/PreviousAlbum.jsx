import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { SiApplemusic, SiSpotify } from "react-icons/si"

const inter = Inter({ subsets: ['latin'] })

export default function PreviousAlbum({albumName, artist, submittedBy, albumPicture, appleMusicURL, spotifyURL, date}) {

  return (
    <div className={styles.prevAlbumContainer}>
        <div className={styles.prevAlbumImage} style={{position: 'relative'}}>
            <Image
                src={albumPicture}
                alt={`${albumName} by ${artist} album cover`}
                fill
                priority
                unoptimized //remove this
            />
        </div>
        <div className={styles.prevAlbumInfo}>
            <p className={styles.previousAlbumName}>
                {albumName}
            </p>
            <p className={styles.previousArtist}>
                {artist}
            </p>
        </div>
        <div className={styles.prevAlbumInfo}>
            <p className={styles.previousSubmittedBy}>
                Submitted by: {submittedBy}
            </p>
            <p className={styles.previousDate}>
                {date}
            </p>
        </div>
        <div className={styles.previousAlbumLinks}>
            <a className={styles.previousAlbumLink} href={spotifyURL} target="_blank" rel="noopener noreferrer">
                <SiSpotify
                    size="20px"
                /> 
            </a>
            <a className={styles.previousAlbumLink} href={appleMusicURL} target="_blank" rel="noopener noreferrer">
                <SiApplemusic
                    size="20px"
                />
            </a>
        </div>
    </div>
  )
}
