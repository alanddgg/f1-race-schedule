import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({schedule}) {

  const races = schedule['MRData']['RaceTable']['Races']
  console.warn(schedule['MRData'])
  console.log(schedule['MRData']['RaceTable']['Races'])
  return (
    <div>

      <h1>F1 </h1>
      
      { races.map((race) => (
        <p className='text-sm'  key={race['round']}>{race['round']}  {race['raceName']} {race['time']}</p>
       ))

      }
      <h1>{races[0]['season']}</h1>
      

    </div>
    
  )
}


export async function getStaticProps(){
  const res = await fetch('https://ergast.com/api/f1/current.json')
  const schedule = await res.json()

  return {
    props:{
      schedule,
    },
  }
}