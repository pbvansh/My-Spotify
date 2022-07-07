import { ChevronDownIcon } from "@heroicons/react/outline";
import { shuffle } from "lodash";
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react";
import {useRecoilValue,useRecoilState} from 'recoil'
import { playlistAtom, playlistIdAtom } from "../atoms/playlistAtom";
import spotifyApi from "../lib/spotify";
import Songs from "./Songs";

const colors = [
    'from-indigo-500',
    'from-blue-500',
    'from-green-500',
    'from-red-500',
    'from-yellow-500',
    'from-pink-500',
    'from-purple-500',
]

const Center = () => {

    const {data : session} =useSession();
    const [color,setColor] = useState();
    const playlistId = useRecoilValue(playlistIdAtom);
    const [playlist,setPlaylist] = useRecoilState(playlistAtom);

    useEffect(()=>{
        setColor(shuffle(colors).pop())
    },[playlistId])

    useEffect(()=>{
        spotifyApi.getPlaylist(playlistId).then((data)=>{
            setPlaylist(data.body);
        }).catch((err)=>{
            console.log("Something went wrong ",err);
        })
    },[playlistId,spotifyApi])

  return (
    <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide">
            <header className=" absolute top-5 right-8">
                <div className="text-white flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full">
                    <img
                        className="rounded-full h-10 w-10"
                        src={session?.user.image}
                        alt=''/>
                    <h2>{session?.user.name}</h2>
                    <ChevronDownIcon className="h-5 w-5 pr-2"/>
                </div>
            </header>

            <section className={`flex items-end space-x-7 text-white bg-gradient-to-b to-black ${color} h-80 padding-8 w-full`}>
                { playlist?.images?.[0]?.url && (
                <img
                    className="h-44 w-44 shadow-2xl"
                    src={playlist?.images?.[0]?.url}
                    alt=""
                    />
                )}

                <div>
                    <p>PLAYLIST</p>
                    <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">{playlist?.name}</h1>
                </div>

            </section>

            <div className="">
                <Songs/>
            </div>
    </div>
  )
}

export default Center
