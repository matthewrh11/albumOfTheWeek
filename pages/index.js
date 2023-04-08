import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {getDocuments} from './api/getData'
import CurrentAlbum from '@/components/CurrentAlbum'
import PreviousAlbum from '@/components/PreviousAlbum'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [prevAlbumList, setPrevAlbumList] = useState([])
  const [currentAlbum, setCurrentAlbum] = useState({})

  const today = new Date();

  const mygetter = async () => {
    return await getDocuments()
  }

  useEffect(() => {
    mygetter().then((result) => {
      const albums = result.result.docs.map((doc) => doc.data()).sort((a,  b) => new Date(b.date) - new Date(a.date))

      const candidateAlbum = albums.find((album) => new Date(album.date) < today);

      const currentIdx = albums.indexOf(candidateAlbum);

      const prevAlbums = albums.slice(currentIdx + 1)

      setCurrentAlbum(candidateAlbum);
      setPrevAlbumList(prevAlbums)
    })
  }, [])

  return (
    <>
      <Head>
        <title>Skullduggery</title>
        <meta name="description" content="Albums of the week for friends!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/skull.ico" />
        {/* Add meta image tag for page preview here */}
      </Head>

      <main className={styles.main}>
      <h1>
        Album Of The Week Starting On {currentAlbum.date}
      </h1>
        <CurrentAlbum
          albumName={currentAlbum.albumName}
          albumPicture={currentAlbum.albumPicture}
          appleMusicURL={currentAlbum.appleMusicURL}
          artist={currentAlbum.artist}
          spotifyURL={currentAlbum.spotifyURL}
          submittedBy={currentAlbum.submittedBy}
        />

        <h1>
          Previous Albums Of The Week
        </h1>
        {prevAlbumList.map((album) => (
          <PreviousAlbum
            key={album.appleMusicURL}
            albumName={album.albumName}
            albumPicture={album.albumPicture}
            appleMusicURL={album.appleMusicURL}
            artist={album.artist}
            spotifyURL={album.spotifyURL}
            submittedBy={album.submittedBy}
            date={album.date}
          />
        ))}
      </main>
    </>
  )
}
