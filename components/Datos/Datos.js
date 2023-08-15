export default function Datos ({titulo,texto}) {

    return (
        <>
        <div className="container my-3 p-3">
            <div className="row">
                <div className="col text-center">                              
                    <h1 className="titulo1">{titulo}</h1>
                    <p className="texto1">{texto}</p>                 
                    </div>
            </div>
        </div>
    </>
    );
}