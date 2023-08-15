import moment from "moment";
export default function Fecha({fechaInicial= ""}){
    
    let dia= '';
    let mes= '';
    let anio= '';

    if(fechaInicial !== ''){
    dia = moment (fechaInicial).format('DD');
    mes = moment (fechaInicial).format('MM');
    dia = moment (fechaInicial).format('YYYY');
}
return(
    <div className="row my-3" > 

    <div className="col">
        <input type="text" placeholder="Dia"
        className="form-control" value={dia} readOnly/>
    </div>

    <div className="col">
        <input type="text" placeholder="Mes"
        className="form-control" value={mes} readOnly/>
    </div>

    <div className="col">
        <input type="text" placeholder="Año"
        className="form-control" value={anio} readOnly/>
    </div>

    </div>
);
}