interface FooterProps {
  onNavigate?: (index: number, resetScroll?: boolean) => void;
}

// Section index map: 0=Home, 1=Shop, 2=Editorial, 3=About, 4=Gallery, 5=StitchLab, 6=Contact
export default function Footer({ onNavigate }: FooterProps) {
  const navTo = (index: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate?.(index, true);
  };

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <h2>HOOK &amp; KNOTS</h2>
        <p>
          Modern accessories.
          <br />
          Made for your expression.
        </p>
      </div>

      <div className="footer-links">
        <div>
          <h3>Shop</h3>
          <a href="#" onClick={navTo(1)}>All Products</a>
          <a href="#" onClick={navTo(4)}>Gallery</a>
        </div>
        <div>
          <h3>About</h3>
          <a href="#" onClick={navTo(3)}>Our Story</a>
          <a href="#" onClick={navTo(6)}>Contact</a>
        </div>
        <div>
          <h3>Help</h3>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
        </div>
        <div>
          <h3>Follow</h3>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Hook &amp; Knots. All rights reserved.</p>
        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
