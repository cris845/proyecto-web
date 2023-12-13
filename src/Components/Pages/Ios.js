import React, { useState } from 'react';
import '../Pages/ios.css';
import imgi1 from '../../assets/img/imgIos/iPhone13Pro.jpg';
import imgi2 from '../../assets/img/imgIos/iPhone12Mini.jpg';
import imgi3 from '../../assets/img/imgIos/iPhoneSE.jpg';
import imgi4 from '../../assets/img/imgIos/iPad15ProMax.jpg';

const Ios = () => {
  const [quantities, setQuantities] = useState({
    5: 1, // iPhone 13 Pro
    6: 1, // iPhone 12 Mini
    7: 1, // iPhone SE
    8: 1, // iPhone 15 Pro Max
  });

  const handleQuantityChange = (productId, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: value,
    }));
  };

  const handleBuyClick = (productId) => {
    const quantity = quantities[productId] || 0;
    alert(`Compra exitosa del producto ${productId} con cantidad ${quantity}`);
  };

  const formatPrice = (price) => {
    return `Bs ${price.toFixed(2)}`;
  };

  const iosProducts = [
    {
      id: 5,
      model: 'iPhone 13 Pro',
      description: 'Pantalla Super Retina XDR y sistema de cámaras Pro.',
      price: 1299.99,
      image: imgi1,
    },
    {
      id: 6,
      model: 'iPhone 12 Mini',
      description: 'El iPhone más pequeño con 5G.',
      price: 699.99,
      image: imgi2,
    },
    {
      id: 7,
      model: 'iPhone SE',
      description: 'Poderoso y asequible, con el chip A15 Bionic.',
      price: 499.99,
      image: imgi3,
    },
    {
      id: 8,
      model: 'iPhone 15 Pro Max',
      description: 'Pantalla OLED y chip A17 Bionic.',
      price: 799.99,
      image: imgi4,
    },
    // Agrega más productos según sea necesario
  ];

  return (
    <div className="ios-container">
      <h1>Tienda de Dispositivos iOS</h1>
      <div className="ios-products">
        {iosProducts.map((product) => (
          <div key={product.id} className="ios-product">
            <img src={product.image} alt={product.model} />
            <h2>{product.model}</h2>
            <p>{product.description}</p>
            <p>Precio: {formatPrice(product.price)}</p>
            <label>Cantidad:</label>
            <input
              type="number"
              min="1"
              value={quantities[product.id] || ''}
              onChange={(e) => handleQuantityChange(product.id, e.target.value)}
            />
            <button onClick={() => handleBuyClick(product.id)}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ios;
