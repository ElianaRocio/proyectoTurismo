import bandera from '../../assets/images/bandera.png';
import { Link, useLocation } from 'react-router-dom';
export default function NavBar({ navBarOptions }) {
  let location = useLocation();
  return (


    <nav className="navbar navbar-expand-lg bg-secondary ">
      <div className="container-fluid">
        <span className="navbar-brand barra px-3"><strong>TRAVELNET</strong></span>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav">
            {navBarOptions.map((navBarOption, index) => {
              let isActive = '';
              if (navBarOption.to === location.pathname) {
                isActive = 'active';
              }
              return (
                <li className="nav-item " key={index}>
                  <Link className={'nav-link barra' + isActive} to={navBarOption.to}>
                    {navBarOption.option}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="col-sm-3">
      <img src={bandera} alt="bandera"  width="60" className="px-3"/>
        <a href="https://www.facebook.com/"><i className="bi bi-facebook px-3 icono" ></i></a>

        <a href="https://twitter.com/?lang=es"><i className="bi bi-twitter px-3 icono" ></i></a>

        <a href="https://www.instagram.com/"><i className="bi bi-instagram px-3 icono" ></i></a>
      </div>
    </nav>
  );
}