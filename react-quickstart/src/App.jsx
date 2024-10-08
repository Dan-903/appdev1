import './App.css'

function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}


function App() {
  

  return (
    <>
    <MyButton/>
    </>
  )
}

export default App
