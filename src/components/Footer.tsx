import './Footer.css'

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">MiLes</h3>
            <p className="footer-tagline">The backbone of Physical AI</p>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links">
              <li><a href="mailto:info@miles.ai">info@miles.ai</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MiLes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
