import { useState } from "react";
import { Header, Footer, Guitar } from "./components";
import { db } from "./data/db";

function App() {
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart((prevCart) => [...prevCart, item]);
  }
  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <div className="section-heading">
          <span className="section-badge">Colección 2025</span>
          <h2>Nuestra Colección</h2>
          <p className="section-sub">
            Descubre las guitarras que definen tu sonido
          </p>
        </div>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              setCart={setCart}
              addToCart={addToCart}
            />
          ))}
        </div>

        <div className="section-cta mt-5 text-center">
          <p>
            ¿Buscas algo especial? <a href="/">Contáctanos</a> para pedidos
            personalizados.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
export default App;
