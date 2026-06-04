import { useState, useRef } from "react";

export const Header = ({ cart, decrementQuantity, incrementQuantity, removeFromCart, clearCart }) => {
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

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

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
            <div
              className="carrito"
              onMouseEnter={openCart}
              onMouseLeave={startCloseCart}
            >
              <div className="carrito-icon">
                <img
                  className="img-fluid"
                  src="/img/carrito.png"
                  alt="Abrir carrito"
                />
                {itemCount > 0 && (
                  <span className="carrito-badge">{itemCount}</span>
                )}
              </div>

              {cartOpen && (
                <div
                  className="cart-overlay"
                  onClick={() => setCartOpen(false)}
                />
              )}

              <div
                id="carrito"
                className={cartOpen ? "active" : ""}
                onMouseEnter={openCart}
                onMouseLeave={startCloseCart}
              >
                <div className="cart-header">
                  <h3>Tu Carrito</h3>
                  <span className="cart-count">{itemCount} artículo{itemCount !== 1 ? 's' : ''}</span>
                </div>

                {cart.length === 0 ? (
                  <div className="cart-empty">
                    <span className="cart-empty-icon">🛒</span>
                    <p>El carrito está vacío</p>
                  </div>
                ) : (
                  <>
                    <div className="cart-items">
                      {cart.map(item => (
                        <div key={item.id} className="cart-item">
                          <div className="cart-item-img">
                            <img src={`/img/${item.image}.jpg`} alt={item.name} />
                          </div>
                          <div className="cart-item-info">
                            <h4>{item.name}</h4>
                            <span className="cart-item-price">${item.price}</span>
                          </div>
                          <div className="cart-item-qty">
                            <button
                              onClick={() => decrementQuantity(item.id)}
                              type="button"
                              className="qty-btn"
                            >−</button>
                            <span className="qty-value">{item.quantity}</span>
                            <button
                              onClick={() => incrementQuantity(item.id)}
                              type="button"
                              className="qty-btn"
                            >+</button>
                          </div>
                          <div className="cart-item-total">
                            <span>${item.price * item.quantity}</span>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            type="button"
                            className="cart-item-remove"
                            aria-label="Eliminar"
                          >✕</button>
                        </div>
                      ))}
                    </div>

                    <div className="cart-summary">
                      <div className="cart-summary-row">
                        <span>Subtotal</span>
                        <span>${total}</span>
                      </div>
                      <div className="cart-summary-row">
                        <span>Envío</span>
                        <span className="cart-free">Gratis</span>
                      </div>
                      <div className="cart-summary-total">
                        <span>Total</span>
                        <span>${total}</span>
                      </div>
                    </div>

                    <div className="cart-actions">
                      <button className="btn-cart-primary">Finalizar Compra</button>
                      <button onClick={clearCart} className="btn-cart-secondary">Vaciar Carrito</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
