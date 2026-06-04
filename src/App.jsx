import { useState } from "react";
import { Header, Footer, Guitar } from "./components";
import { db } from "./data/db";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    const itemExist = cart.findIndex((guitar) => guitar.id === item.id);
    if (itemExist >= 0) {
      const updateCart = [...cart];
      updateCart[itemExist].quantity++;
      setCart(updateCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  }

  function decrementQuantity(id) {
    const updateCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity - 1) };
      }
      return item;
    });
    setCart(updateCart);
  }

  function incrementQuantity(id) {
    const updateCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updateCart);
  }

  function removeFromCart(id) {
    setCart(cart.filter(item => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <>
      <Header
        cart={cart}
        decrementQuantity={decrementQuantity}
        incrementQuantity={incrementQuantity}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />

      <main className="container-xl mt-5">
        <div className="section-heading">
          <span className="section-badge">Colección 2025</span>
          <h2>Nuestra Colección</h2>
          <p className="section-sub">Descubre las guitarras que definen tu sonido</p>
        </div>

        <div className="row mt-5">
          {db.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              addToCart={addToCart}
            />
          ))}
        </div>

        <div className="section-cta mt-5 text-center">
          <p>¿Buscas algo especial? <a href="/">Contáctanos</a> para pedidos personalizados.</p>
        </div>
      </main>

      <Footer />
    </>
  );
}
export default App;
