// ProductItem.js
import React from 'react';

function ProductItem({ product, onAddToCart }) {
  return (
    <div style={styles.item}>
      <h4>{product.name}</h4>
      <p>Giá: {product.price.toLocaleString()}₫</p>
      <button onClick={() => onAddToCart(product)}>Thêm vào giỏ</button>
    </div>
  );
}

const styles = {
  item: {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
  },
};

export default ProductItem;
