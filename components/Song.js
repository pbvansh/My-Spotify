import Image from "next/image";
import useSpotify from "../hooks/useSpotify"
import { millisToMinutesAndSecond } from "../lib/time";
import { useRecoilState } from "recoil";
import { currentTrackIdAtom, isPlayingAtom } from "../atoms/songAtom";

const Song = ({order,track}) => {

    const spotifyApi =useSpotify();
    const [currentTrackId,setcurrentTrackId] = useRecoilState(currentTrackIdAtom);
    const [isPlaying,setisPlaying] =useRecoilState(isPlayingAtom);

    const playSong = () => {
      setcurrentTrackId(track.track.id);
      setisPlaying(true);
      spotifyApi.play({
        uris: [track.track.uri],
      })
    }

  return (
    <div onClick={playSong} className="grid grid-cols-2 text-gray-500 py-4 px-4 hover:bg-gray-900 rounded-lg cursor-pointer">
      <div className="flex items-center space-x-4">
        <p className="mr-3"> {order+1}</p>
        <Image
            src={track.track.album.images[0].url}
            height={40}
            width={40}/>
        <div>
            <p className="text-white w-36 lg:w-64 truncate">{track.track.name}</p>
            <p className="w-40">{track.track.artists[0].name}</p>
        </div>
      </div>

      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="hidden md:inline">{track.track.album.name}</p>
        <p>{millisToMinutesAndSecond(track.track.duration_ms)}</p>
      </div>
    </div>
  )
}

export default Song

//https://fonts.google.com/specimen/Kosugi+Maru?preview.text=kem%20cho%20hi&preview.size=34&preview.text_type=custom#standard-styles