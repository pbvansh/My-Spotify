import {
    HeartIcon,
    HomeIcon,
    LibraryIcon,
    PlusCircleIcon,
    RssIcon,
    SearchIcon,
} from '@heroicons/react/outline'
import {signOut,useSession} from 'next-auth/react'
import { useState,useEffect } from 'react'
import useSpotify from '../hooks/useSpotify'
import {useRecoilState} from 'recoil'
import { playlistIdAtom } from '../atoms/playlistAtom'

const Sidebar = () => {
    const spotifyApi = useSpotify()
    const {data : session} = useSession();
    const [playlists,setPlaylists] = useState([]);
    const [PlaylistId,setPlaylistId] = useRecoilState(playlistIdAtom)
    //console.log("u piked playlist >>>>",PlaylistId);
    
    useEffect(()=>{
        if(spotifyApi.getAccessToken()){
            spotifyApi.getUserPlaylists().then((data)=>{
                setPlaylists(data.body.items);
            })
        }
    },[session,spotifyApi])
    //console.log(playlists);

  return (
    <div className='text-gray-500 p-5 text-xs lg:text-sm sm:max-w-[12rem] lg:max-w-[15rem]
                     border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide hidden md:inline-flex'>
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
        {/* playlist */}
        {
            playlists.map((playlist)=>(
                <p key={playlist.id}
                 onClick={()=> setPlaylistId(playlist.id)}
                 className='cursor-pointer hover:text-white'>
                    {playlist.name}
                </p>
            ))
        }
      </div>
    </div>
  )
}

export default Sidebar
