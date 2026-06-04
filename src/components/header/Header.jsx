import { useState, useRef } from 'react';

export const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const cartTimer = useRef(null);

  const openCart = () => {
    if (cartTimer.current) {
      clearTimeout(cartTimer.current);
      cartTimer.current = null;
    }
    setCartOpen(true);
  };

  const startCloseCart = () => {
    if (cartTimer.current) {
      clearTimeout(cartTimer.current);
    }
    cartTimer.current = setTimeout(() => {
      setCartOpen(false);
      cartTimer.current = null;
    }, 400);
  };

  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between align-items-center">
          <div className="col-8 col-md-3">
            <a href="/" className="header-logo">
              <img
                className="img-fluid"
                src="/img/logo.svg"
                alt="GuitarLA logo"
              />
            </a>
          </div>
          <nav className="col-md-6 mt-5 mt-md-0 d-flex align-items-center justify-content-end header-nav">
            <a href="/" className="nav-link">Inicio</a>
            <a href="/" className="nav-link">Tienda</a>
            <a href="/" className="nav-link">Nosotros</a>
            <div className="carrito" onMouseEnter={openCart} onMouseLeave={startCloseCart}>
              <div className="carrito-icon">
                <img
                  className="img-fluid"
                  src="/img/carrito.png"
                  alt="Abrir carrito"
                />
                <span className="carrito-badge">2</span>
              </div>

              {cartOpen && <div className="cart-overlay" onClick={() => setCartOpen(false)} />}

              <div id="carrito" className={cartOpen ? 'active' : ''} onMouseEnter={openCart} onMouseLeave={startCloseCart}>
                <div className="cart-header">
                  <h3>Tu Carrito</h3>
                  <span className="cart-count">2 artículos</span>
                </div>

                <div className="cart-items">
                  <div className="cart-item">
                    <div className="cart-item-img">
                      <img
                        src="/img/guitarra_02.jpg"
                        alt="SRV"
                      />
                    </div>
                    <div className="cart-item-info">
                      <h4>SRV</h4>
                      <span className="cart-item-price">$299</span>
                    </div>
                    <div className="cart-item-qty">
                      <button type="button" className="qty-btn">−</button>
                      <span className="qty-value">1</span>
                      <button type="button" className="qty-btn">+</button>
                    </div>
                    <div className="cart-item-total">
                      <span>$299</span>
                    </div>
                    <button type="button" className="cart-item-remove" aria-label="Eliminar">✕</button>
                  </div>

                  <div className="cart-item">
                    <div className="cart-item-img">
                      <img
                        src="/img/guitarra_05.jpg"
                        alt="Thompson"
                      />
                    </div>
                    <div className="cart-item-info">
                      <h4>Thompson</h4>
                      <span className="cart-item-price">$399</span>
                    </div>
                    <div className="cart-item-qty">
                      <button type="button" className="qty-btn">−</button>
                      <span className="qty-value">1</span>
                      <button type="button" className="qty-btn">+</button>
                    </div>
                    <div className="cart-item-total">
                      <span>$399</span>
                    </div>
                    <button type="button" className="cart-item-remove" aria-label="Eliminar">✕</button>
                  </div>
                </div>

                <div className="cart-summary">
                  <div className="cart-summary-row">
                    <span>Subtotal</span>
                    <span>$698</span>
                  </div>
                  <div className="cart-summary-row">
                    <span>Envío</span>
                    <span className="cart-free">Gratis</span>
                  </div>
                  <div className="cart-summary-total">
                    <span>Total</span>
                    <span>$698</span>
                  </div>
                </div>

                <div className="cart-actions">
                  <button className="btn-cart-primary">
                    Finalizar Compra
                  </button>
                  <button className="btn-cart-secondary">
                    Vaciar Carrito
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
