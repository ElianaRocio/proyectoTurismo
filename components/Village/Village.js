import Descripcion from "../../components/Descripcion/Descripcion";
import Image4 from "../../components/Image4/Image4";
export default function Village() {

    let lugar3 = [
        {
            titulo: 'Santa Claus Village',
            texto: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.',
            tiempo: 'Paquete 1 días / 2 noches',
            precio: 'Precio por persona',
            costo: '200 $us ',
        },
    ];

    return (
        <div className="container my-3">
            <div className="row">
                <div className="col ">
                    <Image4 />
                </div>
                <div className="col-sm-6">
                    <div className="lugar3">
                        {lugar3.map((descripcion, index) => {
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


                        <div className="my-3">
                            <button className="btn btn-secondary"> Más informacion</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}