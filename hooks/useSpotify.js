
import { signIn,useSession } from "next-auth/react";
import spotifyApi from "../lib/spotify";
import { useEffect } from "react";

function useSpotify() {

    const { data: session} = useSession();

    useEffect(()=>{

        if(session){
            // if refress token attempt fail ,direct user to login..
            
            if(session.error ==='refreshAccessTokenError'){
                signIn();
            } 
            
            spotifyApi.setAccessToken(session.user.accessToken);
        }
        },[session]);

  return spotifyApi;
}

export default useSpotify;
