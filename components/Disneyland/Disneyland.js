import Descripcion from "../../components/Descripcion/Descripcion";
import Image1 from "../../components/Image1/Image1";
import { Link} from 'react-router-dom';

export default function Disneyland() {

    let lugar = [
        {
            titulo: 'Magic Kingdom',
            texto: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.',
            tiempo: 'Paquete 2 días / 3 noches',
            precio: 'Precio por persona',
            costo: '500 $us ',
        },
    ];
    return (

        <div className="container my-3">
            <div className="row">
                <div className="col-sm-6 ">
                    <Image1 />
                </div>
                <div className="col-sm-6">
                    <div className="lugar">
                        {lugar.map((descripcion, index) => {
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
                        <Link to="/informacion-Disney">   <button className="btn btn-secondary"> Más informacion</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );

}