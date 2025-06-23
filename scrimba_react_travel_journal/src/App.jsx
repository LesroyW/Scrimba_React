import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import MountFuji from './assets/Mount_Fuji.jpg'
import { data } from './data'

function App() {

  const entryElements = data.map((dataEntry) => {
     return <Entry
      key={dataEntry.id}
      img={{src: dataEntry.img.src, alt: dataEntry.img.alt}}
      country={dataEntry.country}
      google_map_location={dataEntry.googleMapsLink}
      main_title={dataEntry.title}
      trip_dates={dataEntry.dates}
      trip_description={dataEntry.text}
      />
  })



   return (
    <>
   <Header/>
   <main className='container'>
   { entryElements}
   </main>
   </>
  )
}

export default App
