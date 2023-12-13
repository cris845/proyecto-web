import 'bootstrap/dist/css/bootstrap.min.css';
import '../Pages/laptops.css';
import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Row, Col, Button } from 'react-bootstrap';
import imgl1 from '../../assets/img/carrusel1.jpg';
import imgl2 from '../../assets/img/carrusel2.jpg';
import imgl3 from '../../assets/img/carrusel3.jpeg';

export const Laptops = () => {
    const [quantity, setQuantity] = useState(1);
    const pricePerUnit = 999.99; // Precio por unidad en bolivianos
    const [purchaseSuccessful, setPurchaseSuccessful] = useState(false);

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleBuyClick = () => {
        // Simulando una compra exitosa
        setPurchaseSuccessful(true);
    };

    return (
        <div className="container">
            <Row>
                <Col md={6}>
                    <div className="product-details">
                        <h1>Laptop</h1>
                        <p>
                            Aquí va tu texto relacionado con las laptops. Puedes agregar más detalles o cualquier contenido que desees.
                        </p>
                    </div>
                </Col>

                <Col md={6}>
                    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={imgl1} className="d-block w-100" alt="Slide 1" />
                            </div>
                            <div className="carousel-item">
                                <img src={imgl2} className="d-block w-100" alt="Slide 2" />
                            </div>
                            <div className="carousel-item">
                                <img src={imgl3} className="d-block w-100" alt="Slide 3" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <div className="product-info">
                        <div className="quantity-controls">
                            <Button variant="outline-secondary" onClick={handleDecreaseQuantity}>
                                -
                            </Button>
                            <span className="product-quantity">{quantity}</span>
                            <Button variant="outline-secondary" onClick={handleIncreaseQuantity}>
                                +
                            </Button>
                        </div>
                        <div className="product-price">Bs {pricePerUnit.toFixed(2)} por unidad</div>
                        <div className="total-price">Bs {(pricePerUnit * quantity).toFixed(2)}</div>
                        {purchaseSuccessful ? (
                            <div className="purchase-success">¡Compra exitosa!</div>
                        ) : (
                            <Button variant="primary" onClick={handleBuyClick}>
                                Comprar
                            </Button>
                        )}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Laptops;