import Image1 from "../../components/Image1/Image1";
import Image2 from "../../components/Image2/Image2";
import Image3 from "../../components/Image3/Image3";
import Datos from "../Datos/Datos";
export default function Destinos() {

    let lugar = [
        {
            titulo: 'Magic Kingdom',
            texto: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        },
    ];
    let lugar1 = [
        {
            titulo: 'Legoland',
            texto: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        },
    ];

    let lugar2 = [
        {
            titulo: 'Wizarding World',
            texto: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        },
    ];

    return (
        <>
        <div className="container my-3">
            <h1 className="text-center titulo2">DESTINOS POPULARES</h1>
                <div className="row">
                    <div className="col ">
                        <Image1 />
                        <div className="lugar">
                            {lugar.map((datos, index) => {
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
                    <div className="col ">
                        <Image2 />
                        <div className="lugar1">
                            {lugar1.map((datos, index) => {
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
                    <div className="col ">
                        <Image3 />
                        <div className="lugar2">
                            {lugar2.map((datos, index) => {
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