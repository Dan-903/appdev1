import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

function Profile() {
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

function ShoppingList(){
  const products = [
    {title:"Cabbage", isFruit: false, id:1},
    {title:"Garlic", isFruit: false, id:2},
    {title:"Apple", isFruit: true, id:3},
  ]

  const listItems = products.map(product =>
    <li
    key = {product.id}
    style={{
      color: product.isFruit ? 'magenta' : 'darkgreen'
    }}>

      {product.title}

    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

function AlertButton(){
  function handleClick(){
    alert('YOU CLICKED ME!!!!!');
  }

  return(
    <button className='alertButton' onClick={handleClick}>
      Click me
    </button>
  );

}

// function ConRender(){
//   let content;
//   if (isLoggedIn) {
//     content = <AdminPanel />;
//   } else {
//     content = <LoginForm />;
//   }
//   return (
//     <div>
//       {content}
//     </div>
//   );
// }



export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage/>
      <Profile/>
      <div className='ShoppingList'>
        <ShoppingList/>
      </div>
      <AlertButton/>
      
    </div>
  );
}
