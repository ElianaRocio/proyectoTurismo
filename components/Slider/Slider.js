import parque1g from '../../assets/images/parque1g.png';
import parque2g from '../../assets/images/parque2g.png';
import parque3g from '../../assets/images/parque3g.png';
import parque4g from '../../assets/images/parque4g.png';
export default function Slider() {
  return (
    <div className="container text-center my-5">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={parque1g} alt="parque1g" className="img-fluid" width="1100" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="titulo">MAGIC KINGDOM</h5>
              <p className="texto"> Conoce nuestro mágico mundo </p>
              <a href="http://40.76.236.251:3000/destino"><button className="btn btn-secondary">DESTINOS POPULARES</button></a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={parque2g} alt="parque1g" className="img-fluid" width="1100" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="titulo">LEGOLAND</h5>
              <p className="texto">Conoce nuestro divertido mundo de lego </p>
              <button className="btn btn-secondary">DESTINOS POPULARES</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={parque3g} alt="parque3g" className="img-fluid" width="1100" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="titulo">WIZARGING WOORLD OF HARRY POTTER</h5>
              <p className="texto"> Muggle,ven a nuestro mundo mágico </p>
              <button className="btn btn-secondary">DESTINOS POPULARES</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={parque4g} alt="parque4g" className="img-fluid" width="1100" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="titulo">SANTA CLAUS VILLAGE</h5>
              <p className="texto"> Celebra Navidad junto a Santa claus</p>
              <button className="btn btn-secondary">DESTINOS POPULARES</button>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}