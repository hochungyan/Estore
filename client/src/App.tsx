import React from 'react';
import logo from './logo.svg';

const products = [
    {name: 'product1', price: 100.00},
    {name: 'product2', price: 200.00},
]

function App() {
  return (
      <div>
          <h1 style={{ color: 'blue' }}>Justin's Re-Store</h1>
          <ul>
              {products.map(item => (
                  <li>{item.name} - {item.price}</li>
                  ))}
              </ul>
    </div>
  );
}

export default App;
