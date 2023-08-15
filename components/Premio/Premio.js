import premio1 from '../../assets/images/premio1.png';
import premio2 from '../../assets/images/premio2.png';
import premio3 from '../../assets/images/premio3.png';
import premio4 from '../../assets/images/premio4.png';
export default function Premio() {
    return (

        <div className="container-fluid fondo1 my-3 p-3">
            <div className="row mt-3">
                <h1 className="text-center titulo1 ">PREMIOS</h1>
            </div>
            <div className="row my-3">
                <div className="col-sm text-center my-3">
                    <img src={premio1} alt="premio1" className="img-fluid" width="300" />
                    <p className="texto3 my-3">PREMIO A TRABAJO EN EQUIPO</p>
                </div>
                <div className="col-sm text-center my-3">
                    <img src={premio2} alt="premio2" className="img-fluid" width="300" />
                    <p className="texto3 my-3">PREMIO A LA ADMINISTRACION DE DESTINO</p>
                </div>
                <div className="col-sm text-center my-3">
                    <img src={premio3} alt="premio3" className="img-fluid" width="300" />
                    <p className="texto3 my-3">PREMIO AL IMPACTO SOCIAL</p>
                </div>
                <div className="col-sm text-center my-3">
                    <img src={premio4} alt="premio4" className="img-fluid" width="300" />
                    <p className="texto3 my-3">RECONOCIMIENTO A MEJOR DESTINO TURISTICO</p>
                </div>
            </div>
        </div>
    );
}