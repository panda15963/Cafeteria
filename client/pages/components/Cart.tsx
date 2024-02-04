import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
// 상품 타입 정의
interface Product {
  id: number;
  name: string;
  price: number;
}

// 장바구니 아이템 타입 정의
interface CartItem extends Product {
  quantity: number;
}

const ShoppingCartPage: React.FC = () => {
  // 장바구니 상태
  const [cart, setCart] = useState<CartItem[]>([]);
  // 상품 목록 (JSON 데이터 대신 사용)
  const products: Product[] = [
    { id: 1, name: '상품 A', price: 20 },
    { id: 2, name: '상품 B', price: 30 },
    { id: 3, name: '상품 C', price: 25 },
  ];

  // 상품을 장바구니에 추가하는 함수
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
  };

  // 장바구니에서 상품을 제거하는 함수
  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <>
      <div>
        <h1>장바구니</h1>
        <div>
          <h2>상품 목록</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.name} - ${product.price}
                <button onClick={() => addToCart(product)}>장바구니에 추가</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>장바
            구니</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
                <button onClick={() => removeFromCart(item.id)}>장바구니에서 제거</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default ShoppingCartPage;
