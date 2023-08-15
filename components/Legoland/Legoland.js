import Descripcion from "../../components/Descripcion/Descripcion";
import Image2 from "../../components/Image2/Image2";
import { Link} from 'react-router-dom';
export default function Legoland() {
    let lugar1 = [
        {
            titulo: 'Legoland',
            texto: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.',
            tiempo: 'Paquete 3 días / 2 noches',
            precio: 'Precio por persona',
            costo: '600 $us ',
        },
    ];
    return (

        <div className="container my-3">
            <div className="row">
                <div className="col">
                    <Image2 />
                </div>
                <div className="col-sm-6">
                    <div className="lugar1">
                        {lugar1.map((descripcion, index) => {
                            return (
                                <Descripcion
                                    key={index}
                                    titulo={descripcion.titulo}
                                    texto={descripcion.texto}
                                    tiempo={descripcion.tiempo}
                                    precio={descripcion.precio}
                                    costo={descripcion.costo}
                                >
                                </Descripcion>
                            );
                        })}
                    </div>
                    <div className="my-3">
                        <Link to="/informacion-Legoland">   <button className="btn btn-secondary"> Más informacion</button></Link>
                    </div>   
                  </div>
            </div>
        </div>

    );
}
