'use client'
import React from 'react'


import Head from 'next/head';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('./map/MapComponant'), { ssr: false });
const page = () => {
 
  return (
    <div>
      <Head>
        <title>Map with Leaflet</title>
        <meta name="description" content="A simple map with React Leaflet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Map with Markers</h1>
        <MapComponent />
      </main>
    </div>
  )
}

export default page
