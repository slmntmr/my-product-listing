import './styles/Header.module.css'; // CSS'i doğrudan import edin

const Header = () => {
  return (
    <header className="header-container">
      <h1>Product Listing</h1>
      <p>
        Explore a wide variety of products across categories including technology, beauty, sports, and more!
      </p>
    </header>
  );
};

export default Header;
