import logo from '../../assets/logofood.png';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/pratos">Pratos</a>
          </li>
          <li>
            <a href="/pedidos">Pedidos</a>
          </li>
          <li>
            <a href="/sair">Sair</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
