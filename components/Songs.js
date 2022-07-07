import {useRecoilValue} from 'recoil'
import { playlistAtom } from '../atoms/playlistAtom'
import Song from './Song';

const Songs = () => {
    const playlist = useRecoilValue(playlistAtom);
  return (
    <div className='text-white m-4'>
      {
        playlist?.tracks.items.map((track,i)=>(
           <Song key={track.track.id} track={track} order={i}/>
        ))
      }
    </div>
  )
}

export default Songs
