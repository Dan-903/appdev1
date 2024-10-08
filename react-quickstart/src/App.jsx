import './App.css'

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];


function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <>
        <div className='shoppingList'>
            <ul>{listItems}</ul>
        </div>

    </>

  );
}



function App() {
  

  return (
    <>
    <ShoppingList/>
    </>
  )
}

export default App
