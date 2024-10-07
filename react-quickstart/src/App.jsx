import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <AboutPage/>
    </div>
  );
}
