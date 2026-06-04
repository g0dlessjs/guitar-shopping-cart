export const Guitar = ({ guitar, addToCart }) => {
  return (
    <div className="col-md-6 col-lg-4 my-4">
      <div className="card-guitar">
        <div className="card-guitar-img">
          <img
            className="img-fluid"
            src={`/img/${guitar.image}.jpg`}
            alt={guitar.name}
          />
        </div>
        <div className="card-guitar-body">
          <h3 className="card-guitar-name">{guitar.name}</h3>
          <span className="card-guitar-tag">Guitarra Eléctrica</span>
          <p className="card-guitar-desc">{guitar.description}</p>
          <div className="card-guitar-footer">
            <span className="card-guitar-price">${guitar.price}</span>
            <button
              type="button"
              className="btn btn-guitar"
              onClick={() => addToCart(guitar)}
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
