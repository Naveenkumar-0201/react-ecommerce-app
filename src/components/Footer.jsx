
const Footer = () => {
  return (
    <footer className="premium-footer">
      <div className="footer-glass container">
        <div className="row text-center text-md-start">

          <div className="col-md-4 mb-4">
            <h4 className="fw-bold text-white logo p-2" style={{background:"black",width:"150px"}}>Z Store</h4>
            <p className="footer-text " >
             <p style={{paddingLeft:"20px",display:"inline"}}> Z Store is a complete E-commerce platform</p> to sell online and buy online.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="text-white">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/cart">Cart</a></li>
              <li><a href="/orders">Orders</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="text-white">Follow Us</h5>
            <div className="social-icons">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </div>

        </div>

        <hr />

        <div className="text-center footer-bottom">
          © {new Date().getFullYear()} ZStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
