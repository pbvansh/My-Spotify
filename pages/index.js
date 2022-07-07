import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Center from '../components/Center'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <Head>
        <title>
          My-Spotify
        </title>
      </Head>
      <main className='flex'>
        {/* Sidebar */}
        <Sidebar/>
        {/* center */}
        <Center/>
      </main>
      {/* player */}
    </div>
  )
}

export async function getServerSideProps(context){

  const session = await getSession(context)

  return{
    props:{
      session
    }
  }
}