
export default function Descripcion({ foto, titulo, texto, tiempo, precio, children, costo }) {
    return (
        <>
            <div className="container ">
                <div className="row">
                    
                    <div className="col">
                        <h1 className="titulo1">{titulo}</h1>
                        <h3 className="texto1">{tiempo}</h3>
                        <p className="texto1">{texto}</p>
                        <h4 className="tcos">{precio}</h4>
                        <h3 className="tcos">{costo}</h3>                        
                    </div>
                </div>
            </div>
        </>
    );
}
 















