import Datos from "../Datos/Datos";
import persona1 from "../../assets/images/persona1.png";
import persona2 from "../../assets/images/persona2.png";
import persona3 from "../../assets/images/persona3.png";
export default function Testimonios() {

    let test1 = [
        {
            titulo: 'Charlie',
            texto: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        },
    ];
    let test2 = [
        {
            titulo: 'Joaquin',
            texto: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        },
    ];
    let test3 = [
        {
            titulo: 'Riley',
            texto: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        },
    ];

    return (
        <>

            <div className="container my-5 text-center">
                <h1 className="text-center titulo2">TESTIMONIOS</h1>
                <div className="row  my-3">
                    <div className="col-sm my-3 ">
                        <img src={persona1} alt="persona1" className="img-fluid" width="200" />
                        <div className="test1">
                            {test1.map((datos, index) => {
                                return (
                                    <Datos
                                        key={index}
                                        titulo={datos.titulo}
                                        texto={datos.texto}
                                    >
                                    </Datos>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-sm my-3 ">
                        <img src={persona2} alt="persona2" className="img-fluid" width="200" />
                        <div className="test2">
                            {test2.map((datos, index) => {
                                return (
                                    <Datos
                                        key={index}
                                        titulo={datos.titulo}
                                        texto={datos.texto}
                                    >
                                    </Datos>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-sm my-3">
                        <img src={persona3} alt="persona3" className="img-fluid" width="200" />
                        <div className="test3">
                            {test3.map((datos, index) => {
                                return (
                                    <Datos
                                        key={index}
                                        titulo={datos.titulo}
                                        texto={datos.texto}
                                    >
                                    </Datos>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}