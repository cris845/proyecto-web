import React, { useState } from 'react';
import '../Pages/televisores.css';
import videot1 from '../../assets/img/Videos/Televisor OLED LG C1.mp4'
const Televisores = () => {
  const [quantities, setQuantities] = useState({
    1: 1, // Televisor 1
    2: 1, // Televisor 2
    3: 1, // Televisor 3
  });

  const handleQuantityChange = (productId, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: value,
    }));
  };

  const handleBuyClick = (productId) => {
    const quantity = quantities[productId] || 0;
    alert(`Compra exitosa del televisor ${productId} con cantidad ${quantity}`);
  };

  const formatPrice = (price) => {
    return `Bs ${price.toFixed(2)}`;
  };

  const televisoresData = [
    {
      id: 1,
      model: 'Televisor OLED LG C1',
      price: 1499.99,
      videoUrl: videot1,
    },
    {
      id: 2,
      model: 'Televisor QLED Samsung Q80T',
      price: 1299.99,
      videoUrl: 'https://youtube.com/embed/oNZpI9zxnac',
    },
    {
      id: 3,
      model: 'Televisor Sony Bravia A8H',
      price: 1599.99,
      videoUrl: 'https://www.youtube.com/embed/SgQNhCbQclA',
    },
    // Agrega más televisores según sea necesario
  ];

  return (
    <div className="televisores-container">
      <h1>Tienda de Televisores</h1>
      <div className="televisores-products">
        {televisoresData.map((televisor) => (
          <div key={televisor.id} className="televisores-product">
            <div className="televisores-details">
              <h2>{televisor.model}</h2>
              <p>Precio: {formatPrice(televisor.price)}</p>
              <label>Cantidad:</label>
              <input
                type="number"
                min="1"
                value={quantities[televisor.id] || ''}
                onChange={(e) => handleQuantityChange(televisor.id, e.target.value)}
              />
              <button onClick={() => handleBuyClick(televisor.id)}>Comprar</button>
            </div>
            <div className="televisores-video">
              <iframe
                title={`Video ${televisor.model}`}
                width="100%"
                height="100%"
                src={televisor.videoUrl}
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

export default Televisores;