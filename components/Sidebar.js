import {
    HeartIcon,
    HomeIcon,
    LibraryIcon,
    PlusCircleIcon,
    RssIcon,
    SearchIcon,
} from '@heroicons/react/outline'
import {signOut,useSession} from 'next-auth/react'

const Sidebar = () => {
    const {data : session} = useSession()
    console.log(session);
  return (
    <div className='text-gray-500'>
      <div className='space-y-4'>
      <button className='btn' onClick={()=>signOut()}>
            <HomeIcon className='h-5 w-5'/>
            <p>Sign Out</p>
        </button>
        <button className='btn'>
            <HomeIcon className='h-5 w-5'/>
            <p>Home</p>
        </button>
        <button className='btn'>
            <SearchIcon className='h-5 w-5'/>
            <p>Search</p>
        </button>
        <button className='btn'>
            <LibraryIcon className='h-5 w-5'/>
            <p>Your Library</p>
        </button>
        <hr className='border-t-[0.1px] border-gray-900'/>

        <button className='btn'>
            <PlusCircleIcon className='h-5 w-5'/>
            <p>Create Playlist</p>
        </button>
        <button className='btn'>
            <HeartIcon className='h-5 w-5'/>
            <p>Liked Songs</p>
        </button>
        <button className='btn'>
            <RssIcon className='h-5 w-5'/>
            <p>Your episodes</p>
        </button>
        <hr className='border-t-[0.1px] border-gray-900'/>
      </div>
    </div>
  )
}

export default Sidebar
