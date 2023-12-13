import React, { useState } from 'react';
import '../Pages/consolas.css';

const Consolas = () => {
  const [quantities, setQuantities] = useState({
    1: 1, // Consola 1
    2: 1, // Consola 2
    3: 1, // Consola 3
  });

  const handleQuantityChange = (productId, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: value,
    }));
  };

  const handleBuyClick = (productId) => {
    const quantity = quantities[productId] || 0;
    alert(`Compra exitosa de la consola ${productId} con cantidad ${quantity}`);
  };

  const formatPrice = (price) => {
    return `Bs ${price.toFixed(2)}`;
  };

  const consolasData = [
    {
      id: 1,
      model: 'PlayStation 5',
      price: 499.99,
      videoUrl: 'https://www.youtube.com/embed/RkC0l4iekYo',
    },
    {
      id: 2,
      model: 'Xbox Series X',
      price: 499.99,
      videoUrl: 'https://www.youtube.com/embed/0tUqIHwHDEc',
    },
    {
      id: 3,
      model: 'Nintendo Switch',
      price: 299.99,
      videoUrl: 'https://www.youtube.com/embed/XoMEATvLpyA',
    },
    // Agrega más consolas según sea necesario
  ];

  return (
    <div className="consolas-container">
      <h1>Tienda de Consolas</h1>
      <div className="consolas-products">
        {consolasData.map((consola) => (
          <div key={consola.id} className="consolas-product">
            <div className="consolas-details">
              <h2>{consola.model}</h2>
              <p>Precio: {formatPrice(consola.price)}</p>
              <label>Cantidad:</label>
              <input
                type="number"
                min="1"
                value={quantities[consola.id] || ''}
                onChange={(e) => handleQuantityChange(consola.id, e.target.value)}
              />
              <button onClick={() => handleBuyClick(consola.id)}>Comprar</button>
              <iframe
                title={`Video ${consola.model}`}
                width="100%"
                height="315"
                src={consola.videoUrl}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Consolas;