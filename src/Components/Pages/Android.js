import React, { useState } from 'react';
import '../Pages/android.css';
import imga1 from '../../assets/img/imgAndroid/SamsungGalaxyS21.jpg';
import imga2 from '../../assets/img/imgAndroid/GooglePixel6.jpg';
import imga3 from '../../assets/img/imgAndroid/OnePlus 9 Pro.jpg';
import imga4 from '../../assets/img/imgAndroid/SonyXperia10V.jpg';

const Android = () => {
  // Usa un objeto para mantener el estado de la cantidad para cada producto
  const [quantities, setQuantities] = useState({
    1: 1, // Samsung Galaxy S21
    2: 1, // Google Pixel 6
    3: 1, // OnePlus 9 Pro
    4: 1, // Sony Xperia 10 V
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
    // Formatear el precio con el símbolo de bolivianos y dos decimales
    return `Bs ${price.toFixed(2)}`;
  };

  const products = [
    {
      id: 1,
      model: 'Samsung Galaxy S21',
      description: 'Potente smartphone con cámara de alta resolución.',
      price: 899.99,
      image: imga1,
    },
    {
      id: 2,
      model: 'Google Pixel 6',
      description: 'Teléfono Android con enfoque en la fotografía.',
      price: 799.99,
      image: imga2,
    },
    {
      id: 3,
      model: 'OnePlus 9 Pro',
      description: 'Potente rendimiento y pantalla fluida.',
      price: 899.99,
      image: imga3,
    },
    {
      id: 4,
      model: 'Sony Xperia 10 V',
      description: 'Potente telefono y pantalla de calidad.',
      price: 599.99,
      image: imga4,
    },
    // Agrega más productos según sea necesario
  ];

  return (
    <div className="android-container">
      <h1>Tienda de Teléfonos Android</h1>
      <div className="android-products">
        {products.map((product) => (
          <div key={product.id} className="android-product">
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

export default Android;