import { getProviders , signIn}from 'next-auth/react';

const login = ({provider}) => {
  return (
    <div className='flex flex-col items-center bg-black justify-center min-h-screen w-full'>
      <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt=""/>
      {Object.values(provider).map((pro)=>(
          <div key={pro.name}>
            <button className='bg-[#18D860] text-white p-5 rounded-full'
                    onClick={()=>signIn(pro.id,{callbackUrl : "/"})}>
              Login with {pro.name}
            </button>
            </div>
      ))}
     
    </div>
  );
}

export default login;

export async function getServerSideProps(){
  const provider = await getProviders();
  return{
    props :{
      provider
    }
  }
}
