import { getToken } from "next-auth/jwt";
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(req) {
  
    const token = await getToken( {req , secret : process.env.JWT_SECRET})
    console.log("gooo");

    const {pathname} =req.nextUrl;
 
    //1) its a req for next-auth session &Provider fetching
    //2) the toketn exists
    //allow req if the following is true
    
    if(pathname.includes('/api/auth') || token){
        return NextResponse.next();
    }
    
    //redirect them to login if they dont have token AND are requsting a protecterd route
    
    if(!token && pathname!=='/login'){
        return NextResponse.redirect('/login');
    }
}

export const config = {
    matcher: '/api/:paths*',
  }

