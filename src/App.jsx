import { useEffect, useState } from "react";
import { Header, Footer, Guitar } from "./components";
import { db } from "./data/db";

function App() {

  const [data, setData] = useState([]);

  console.log(data)

  useEffect(() => {
    setData(db);
  }, [])

  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {
            data.map(guitar => (
              <Guitar 
                key={guitar.id}
                guitar={guitar}
              />
            ))
          }
        </div>
      </main>

      <Footer />
    </>
  );
}
export default App;
