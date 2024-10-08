import './App.css'
import AdminPanel from './AdminPanel';
import LoginForm from './LoginForm';

function Condition(){
    let content;
    let isLoggedIn = true;

  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  return (
    <div>
      {content}
    </div>
  );

}


function App() {
  

  return (
    <>
    <Condition/>
    </>
  )
}

export default App
