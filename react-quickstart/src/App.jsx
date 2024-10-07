import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const user = {
  name: 'Travis Scott',
  imageUrl: 'https://us-tuna-sounds-images.voicemod.net/134ae266-5114-42f5-920a-034908a52858-1688717930888.png',
  imageSize: 90,
}

function Profile(){
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
function AboutPage(){
  return(
    <>
      <h1>About</h1>
      <p>Hello there. <br /> How do you do?</p>

    </>

  );
}

function MyButton() {
  return (
    <>
    <a href="https://youtu.be/znqA2Qdw7HA?si=rG2fkmPvQ32Qx_Ds" target='blank'>
    <button>
      I am Sorry
    </button>
    </a>
    </>
    
  );
}



export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <AboutPage/>
      <Profile />
      <br />
      
      <MyButton />
    </div>
  );
}
