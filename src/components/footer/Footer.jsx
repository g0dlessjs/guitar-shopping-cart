export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-5">
      <div className="footer-main">
        <div className="container-xl">
          <div className="footer-grid">
            <div className="footer-col">
              <img className="footer-logo" src="/img/logo.svg" alt="GuitarLA" />
              <p className="footer-desc">
                Tu tienda de guitarras eléctricas favorita. Calidad y pasión por la música desde 2010.
              </p>
            </div>
            <div className="footer-col">
              <h4>Enlaces</h4>
              <a href="/">Inicio</a>
              <a href="/">Tienda</a>
              <a href="/">Nosotros</a>
              <a href="/">Contacto</a>
            </div>
            <div className="footer-col">
              <h4>Contacto</h4>
              <p>contacto@guitarla.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Av. Música 123, Nashville</p>
            </div>
            <div className="footer-col">
              <h4>Síguenos</h4>
              <div className="footer-social">
                <a href="/" className="social-link" aria-label="Facebook">f</a>
                <a href="/" className="social-link" aria-label="Twitter">t</a>
                <a href="/" className="social-link" aria-label="Instagram">i</a>
                <a href="/" className="social-link" aria-label="YouTube">y</a>
              </div>
              <div className="footer-newsletter">
                <p>Recibe ofertas exclusivas</p>
                <div className="newsletter-form">
                  <input type="email" placeholder="tu@email.com" />
                  <button type="button">Suscribir</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container-xl">
          <p>GuitarLA &copy; {year} — Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};
