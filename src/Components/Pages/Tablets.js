import React, { useState } from 'react';
import '../Pages/tablets.css';
import imgt1 from '../../assets/img/imgTablets/iPad Air 5gen 1.jpg';
import imgt2 from '../../assets/img/imgTablets/iPad Air 5gen 2.jpg';
import imgt3 from '../../assets/img/imgTablets/Samsung Galaxy Tab S7 1.jpg';
import imgt4 from '../../assets/img/imgTablets/Samsung Galaxy Tab S7 2.jpg';
import imgt5 from '../../assets/img/imgTablets/Amazon Fire HD 10 1.jpg';
import imgt6 from '../../assets/img/imgTablets/Amazon Fire HD 10 2.jpg';

const Tablets = () => {
  const [quantities, setQuantities] = useState({
    1: 1, // Tablet 1
    2: 1, // Tablet 2
    3: 1, // Tablet 3
  });

  const handleQuantityChange = (productId, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: value,
    }));
  };

  const handleBuyClick = (productId) => {
    const quantity = quantities[productId] || 0;
    alert(`Compra exitosa de la tablet ${productId} con cantidad ${quantity}`);
  };

  const formatPrice = (price) => {
    return `Bs ${price.toFixed(2)}`;
  };

  const tabletsData = [
    {
      id: 1,
      model: 'iPad Air 5gen',
      price: 499.99,
      images: [
        imgt1,
        imgt2,
      ],
    },
    {
      id: 2,
      model: 'Samsung Galaxy Tab S7',
      price: 599.99,
      images: [
        imgt3,
        imgt4,
      ],
    },
    {
      id: 3,
      model: 'Amazon Fire HD 10',
      price: 149.99,
      images: [
        imgt5 ,
        imgt6 ,
      ],
    },
    // Agrega más tablets según sea necesario
  ];

  return (
    <div className="tablets-container">
      <h1>Tienda de Tablets</h1>
      <div className="tablets-products">
        {tabletsData.map((tablet) => (
          <div key={tablet.id} className="tablets-product">
            <div className="tablets-details">
              <h2>{tablet.model}</h2>
              <p>Precio: {formatPrice(tablet.price)}</p>
              <label>Cantidad:</label>
              <input
                type="number"
                min="1"
                value={quantities[tablet.id] || ''}
                onChange={(e) => handleQuantityChange(tablet.id, e.target.value)}
              />
              <button onClick={() => handleBuyClick(tablet.id)}>Comprar</button>
            </div>
            <div className="tablets-images">
              <div id={`carouselExample${tablet.id}`} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {tablet.images.map((image, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                      <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExample${tablet.id}`} data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#carouselExample${tablet.id}`} data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tablets;
