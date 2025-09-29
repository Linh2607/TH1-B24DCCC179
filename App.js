import React from 'react';
import TextCounter from './TextCounter';

function App() {
  return (
    <div>
      <h1>Bộ đếm kí tự</h1>
      <TextCounter />
    </div>
  );
}

export default App;
import React from 'react';
import TrafficLight from './TrafficLight';
function App() {
  return (
    <div>
      <h1>Đèn giao thông</h1>
      <TrafficLight />
    </div>
  );
}

export default App;
import React from 'react';
import TodoList from './TodoList';
function App() {
  return (
    <div>
      <h1>Danh sách công việc</h1>
      <TodoList />
    </div>
  );
}

export default App;

// App.js
import React, { useState } from 'react';
import ProductItem from './ProductItem';

function App() {
  const products = [
    { id: 1, name: 'Chuột Logitech', price: 300000 },
    { id: 2, name: 'Bàn phím cơ', price: 800000 },
    { id: 3, name: 'Màn hình 24 inch', price: 2500000 },
  ];

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>🛍️ Danh sách sản phẩm</h2>
      {products.map((p) => (
        <ProductItem key={p.id} product={p} onAddToCart={handleAddToCart} />
      ))}

      <hr />
      <h3>🧾 Giỏ hàng</h3>
      <p>Tổng sản phẩm: <strong>{totalItems}</strong></p>
      <p>Tổng tiền: <strong>{totalPrice.toLocaleString()}₫</strong></p>

      {cart.length > 0 && (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - {item.price.toLocaleString()}₫</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
